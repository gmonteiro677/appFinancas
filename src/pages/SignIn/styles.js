import styled from 'styled-components/native'

export const Background = styled.View`
  flex: 1;
  background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  background-color: #FFFFFF;
  width: 90%;
  font-size: 17px;
  padding: 10px;
  border-radius: 8px;
  color: #121212;
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color:#4caf50;
  height: 45px;
  width: 90%;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
`;

export const Link = styled.TouchableOpacity`
  width: 40%;
  height: 25px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: #bdbdbd;
`;

export const LinkText = styled.Text`
  color: #171717;
`;
