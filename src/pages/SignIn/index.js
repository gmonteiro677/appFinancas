import React, {useState, useContext} from "react";
import { Platform } from "react-native";
import Toast from 'react-native-toast-message';

import * as C from './styles';

  import { useNavigation } from "@react-navigation/native";
  import { AuthContext } from "../../contexts/auth"

export default function SignIn(){
   const navigation = useNavigation();
   const { signIn, loadingAuth } = useContext(AuthContext)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

   function handleLogin(){
    if(email === '' || password === ''){
      showToast('info','Preencha todos os campos!')
      return;
    }
    signIn(email, password)
   }

  return(
    <C.Background>
       <Toast />
        <C.Container
          behavior={Platform.OS === 'ios' ? 'padding' : ''}
          enabled
        >
          <C.Logo 
            source={require('../../assets/Logo.png')}
          />

        <C.AreaInput>
          <C.Input 
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </C.AreaInput>

        <C.AreaInput>
          <C.Input 
            placeholder="Senha"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </C.AreaInput>

        <C.SubmitButton activeOpacity={0.7} onPress={handleLogin}>
          <C.SubmitText>Acessar</C.SubmitText>
        </C.SubmitButton>

        <C.Link onPress={ () => navigation.navigate('SignUp')}>
          <C.LinkText>Criar uma conta!</C.LinkText>
        </C.Link>

        </C.Container>
    </C.Background>
  )
}