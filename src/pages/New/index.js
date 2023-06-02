import React, { useState } from "react";
import * as C from './styles'

import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

import Header from "../../components/Header";
import RegisterTypes from "../../components/RegisterTypes";

import api from "../../services/api"
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

export default function New(){
 const navigation = useNavigation();

 const [labelInput, setLabelinput] = useState('')
 const [valueInput, setValueInput] = useState('')
 const [type, setType] = useState('receita')

 function handleSubmit(){
    Keyboard.addListener();

    if(isNaN(parseFloat(valueInput)) || type === null){
        alert('Preencha todos os campos')
        return;
    }

    Alert.alert(
        'Confirma lançamento',
        `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Confirmar',
            onPress: () => handleAdd()
          }
        ]
    )
 }

 async function handleAdd(){
    Keyboard.addListener();

    await api.post('/receive', {
        description: labelInput,
        value: Number(valueInput),
        type: type,
        date: format(new Date(), 'dd/MM/yyyy')
    })

    setLabelinput('');
    setValueInput('');
    navigation.navigate('Home')
 }

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss() } >
            <C.Background>
            <Header title="Registrando"/>

            <C.SafeAreaView>
                <C.Input
                placeholder="Descrição desse registro"
                value={labelInput}
                onChangeText={(text) => setLabelinput(text)}
                />

                <C.Input
                placeholder="Valor desejado"
                keyboardType="numeric"
                value={valueInput}
                onChangeText={(text) => setValueInput(text)}
                />

                <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item) }/>

            <C.SubmitButton onPress={() => handleSubmit()}> 
                <C.SubmitText>Registrar</C.SubmitText>
            </C.SubmitButton>

            </C.SafeAreaView>
            </C.Background>
        </TouchableWithoutFeedback>
    )
}