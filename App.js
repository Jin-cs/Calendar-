import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput ,Button} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';




const App = () => {
 const [text, setText] = useState("");
 const [num, setNum] = useState(0);
 const [value, onChange] = useState(new Date());
 return (
    <View>
        <Calendar/>
        <Text>Hello</Text>
        <Text>Hello</Text>
    </View>
);
}
export default App;