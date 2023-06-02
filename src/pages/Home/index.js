import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity, Modal } from "react-native";

import Header from '../../components/Header' 
import HistoricoList from "../../components/HistoricoList";

import api from '../../services/api'
import { format,formatISO } from 'date-fns'
import * as C from './styles';
import { useIsFocused } from '@react-navigation/native'
import BalanceItem from '../../components/BalanceItem'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CalendarModal from "../../components/CalendarModal";

export default function Home(){
  const isFocused = useIsFocused()
  const [listBalance, setListBalance] = useState([])
  const [movements, setMovements] = useState([])
  const [dateMovements, setDateMoviments] = useState(new Date())
  const [modalVisible, setModalvisible] = useState(false);

  useEffect(()=>{
    let isActive = true;

    async function getMovements(){

      let date = new Date(dateMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params:{
          date: dateFormated
        }
      })

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated 
        }
      })

      if(isActive){
        setMovements(receives.data)
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  }, [isFocused, dateMovements])

async function handleDelete(id){
  try{
     await api.delete('/receives/delete', {
      params:{
        item_id: id
      }
     })

     setDateMoviments(new Date());
  }catch(err){
    console.log(err);
  }
}

function filterDateMoviments(dateSelected){
   setDateMoviments(dateSelected)
}

  return(
    <C.Background>
       <Header title="Minhas movimentações"/>
       <C.listBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={ ({ item }) => ( <BalanceItem data={item} /> )}
       />

       <C.Area>
         <TouchableOpacity onPress={ () => setModalvisible(true) }>
           <Icon name="event" color="#121212" size={30}/>
         </TouchableOpacity>
         <C.Title>Ultimas movimentações</C.Title>
       </C.Area>

       <C.List
        data={movements}
        keyExtractor={item => item.id }
        renderItem={({item}) => <HistoricoList data={item} deleteItem={handleDelete} /> }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
       />

       <Modal visible={modalVisible} animationType="fade" transparent={true}>
         <CalendarModal
          setVisible={ () => setModalvisible(false)}
          handleFilter={filterDateMoviments}
         />
       </Modal>

    </C.Background>
  )
}