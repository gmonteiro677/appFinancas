import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

import { AuthContext } from "../../contexts/auth";
import Header from '../../components/Header' 

import api from '../../services/api'
import { format } from 'date-fns'

import * as C from './styles';

export default function Home(){
  const [listBalance, setListBalance] = useState([])
  const [dateMoviments, setDateMoviments] = useState(new Date())

useEffect(() => {
  let isActive = true;

  async function getMoviments(){
     let dateFormated = format(dateMoviments, 'dd/MM/yyyy');

     const balance = await api.get('/balance', {
      params:{
        date: dateFormated
      }
     })
     console.log(balance.data)
   }
})

  return(
    <C.Background>
       <Header title="Minhas movimentações"/>
    </C.Background>
  )
}