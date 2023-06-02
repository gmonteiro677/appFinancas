import React from "react";
import { TouchableWithoutFeedback, Alert } from "react-native";
import * as C from './styles'

import Icon from "react-native-vector-icons/Feather"

import handleDelete from '../../pages/Home'


export default function HistoricoList({ data, deleteItem }){

   function handleDeleteItem(){
     Alert.alert(
        'Atenção',
        'Você tem certeza que deseja deletar esse registro?',
        [
            {
                text: 'Cancelar',
                style: 'cancel0,'
            },
            {
                text: 'Continuar',
                onPress: () => deleteItem(data.id)
            }
        ]
     )
   }

   function infoHistoricoList(){
    Alert.alert(
        'Informações do lançamento',
        `Descrição: ${data.description}`,
        [
            {
                text: 'Sair',
                style: 'cancel0,'
            }
        ]
    )
   }

    return(
       <TouchableWithoutFeedback onPress={infoHistoricoList} onLongPress={handleDeleteItem}>
        <C.Container>
            <C.Tipo>
                <C.IconView tipo={data.type}>
                   <Icon
                   name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
                   size={20}
                   color="#FFF" 
                   />
                   <C.TipoText>{data.type}</C.TipoText>
                </C.IconView>
            </C.Tipo>

            <C.ValorText>
               R$ {data.value}
            </C.ValorText>
        </C.Container>
      </TouchableWithoutFeedback>  
    )
}