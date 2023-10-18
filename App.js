import { Button, Alert, StyleSheet, View } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import jwt_decode from "jwt-decode";
import Auth from "./src/screens/Auth";
import { useEffect, useMemo, useState } from "react";
import AuthContext from "./src/context/AuthContext";
import { setTokenApi, getTokenApi, removeTokenApi } from "./src/api/token";
import MainStack from "./src/navigation/MainStack";

export default function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if (token) {
        setAuth({
          token,
          idUser: jwt_decode(token).id,
        });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = (user) => {
    console.log("App.js");
    console.log(user);
    setTokenApi(user.jwt);
    setAuth({
      token: user.jwt,
      idUser: user.user._id,
    });
  };

  const logout = (user) => {
    if (auth) {
      removeTokenApi();
      setAuth(null);
    }
  };

  const authDta = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authDta}>
      <PaperProvider>{auth ? <MainStack /> : <Auth />}</PaperProvider>
    </AuthContext.Provider>
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
