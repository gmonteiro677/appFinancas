import React from "react";
import * as C from './styles'
import Icon from 'react-native-vector-icons/Feather'

import { useNavigation } from "@react-navigation/native";

export default function Header({title}){
  const navigation = useNavigation();

 return(
    <C.Container>
       <C.ButtonMenu onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={35} color="#121212"/>
       </C.ButtonMenu>
       <C.Title>{title}</C.Title> 
    </C.Container>
 )
} 