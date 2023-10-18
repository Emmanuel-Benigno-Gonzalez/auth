import * as React from "react";
import { Drawer } from "react-native-paper";
import useAuth from '../hooks/useAuth'

const DrawerNavigation = (props) => {
  const [active, setActive] = React.useState("");
  const auth = useAuth()

  return (
    <Drawer.Section title="Menú">
      <Drawer.Item
        label="Perfil"
        active={active === "first"}
        onPress={() => setActive("first")}
      />
      <Drawer.Item
        label="Cerrar sesión"
        active={active === "second"}
        onPress={() => {
          setActive("second");
          auth.logout()
        }}
      />
    </Drawer.Section>
  );
};

export default DrawerNavigation;
