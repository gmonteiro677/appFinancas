import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import * as C from './styles'

import { Calendar, LocaleConfig } from "react-native-calendars";
import { ptBR } from './localeCalendar';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export default function CalendarModal({ setVisible, handleFilter }){
  const [dateNow, setDateNow] = useState(new Date())
  const [markedDates, setMarkedDates] = useState({})

  function handleOnPress(date){
    setDateNow(new Date(date.dateString))

    let markedDay = {};

    markedDay[date.dateString] = {
       selected: true,
       selectedColor : '#3b3bbf',
       textColor: '#FFF'
    }

    setMarkedDates(markedDay)

  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }

    return(
        <C.Container>
            <TouchableWithoutFeedback onPress={setVisible}> 
                <C.HandleTouchable>

                </C.HandleTouchable>
            </TouchableWithoutFeedback>

        <C.ModalContent> 

         <Calendar
          onDayPress={handleOnPress}
          markedDates={markedDates}
          enableSwipeMonths={true}
          theme={{
            todayTextColor: '#FF0000',
            selectedDayBackgroundColor: '#00adf5',
            selactedDayTextColor: '#FFF'
          }}
         />

            <C.ButtonFilter onPress={handleFilterDate}> 
               <C.ButtonFilterText>Filtrar</C.ButtonFilterText>
            </C.ButtonFilter>
        </C.ModalContent>

        </C.Container>
    )
}