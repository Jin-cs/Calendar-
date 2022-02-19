import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput ,Button} from 'react-native';
import { Calendar }from 'react-calendar';




const App = () => {
 const [text, setText] = useState("");
 const [num, setNum] = useState(0);
 const [value, onChange] = useState(new Date());
 return (
 <h1>Hello</h1>
);
}
export default App;