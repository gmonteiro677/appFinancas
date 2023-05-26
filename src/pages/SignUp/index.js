import React, {useContext, useState} from "react";
import { Platform, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';

// import {
//    Background,
//    Container,
//    AreaInput,
//    Input,
//    SubmitButton,
//    SubmitText 
//   } from "./styles";

import * as C from "./styles"

import { AuthContext } from "../../contexts/auth";

export default function SignUp(){

  const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

const { SignUp, loadingAuth } = useContext(AuthContext)
const [nome, setNome] = useState('')
const [senha, setSenha] = useState('')
const [email, setEmail] = useState('')

    function handleSignUp(){
      if(nome === '' || senha == '' || email == ''  ) {
        showToast('error', 'Preencha Todos os Campos');
        return
      }
      SignUp(nome, senha, email);
    }

  return(
    <C.Background>
        <C.Container
         behavior={Platform.OS === 'ios' ? 'padding' : ''}
         enabled
        >
          <C.AreaInput>
             <C.Input 
             placeholder='Nome'
             value={nome}
             onChangeText={(text) => setNome(text)}
             />
          </C.AreaInput>

          <C.AreaInput>
             <C.Input 
             placeholder='Email'
             value={email}
             onChangeText={(text) => setEmail(text)}
             />
          </C.AreaInput>

          <C.AreaInput>
             <C.Input 
             placeholder='Senha'
             value={senha}
             onChangeText={(text) => setSenha(text)}
             secureTextEntry={true}
             />
          </C.AreaInput>

          <C.SubmitButton onPress={() => handleSignUp()}>
            {
              loadingAuth ? (
                <ActivityIndicator seze={20} color="#FFFFFF"/>
              ) 
              : (
                <C.SubmitText>Cadastrar</C.SubmitText>
              )
            }
          </C.SubmitButton>
        </C.Container>
    </C.Background>
  )
}