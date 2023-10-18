import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Appbar } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";
import DrawerNavigation from "../components/DrawerNavigation";


const Inicio = ({ navigation }) => {

  const drawer = useRef(null);

  const navigationView = () => (
    <View style={[styles.navigationCont]}>
      <DrawerNavigation ></DrawerNavigation>
    </View>
  );

  return (
    <PaperProvider>
      <Appbar.Header>
        <Appbar.Action
          icon="menu"
          onPress={() => drawer.current.openDrawer()}
        />
        <Appbar.Content title="Inicio" />
      </Appbar.Header>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={"left"}
        renderNavigationView={navigationView}
      >
        <View style={styles.container}>
          <Text> Usuario Autenticado </Text>
        </View>
      </DrawerLayoutAndroid>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  navigationCont: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});




export default Inicio;