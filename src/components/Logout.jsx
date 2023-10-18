import React from "react";
import { View, Text, Button } from "react-native";

function Logout() {
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>App Autenticado</Text>
      <Button title="Cerrar Sesion"  />
    </View>
  );
}

export default Logout;
