import { Text, View } from "react-native";

export default function Index() {
  return (
    <View 
      style={{ 
        backgroundColor:'#888',
        alignItems:'center',
        flex:1,
       }}
    >
      <Text style={{ fontSize:30, color:'white', fontWeight:700, fontStyle:'italic', }}>Hello Abhishek</Text>
    </View>
  );
}
