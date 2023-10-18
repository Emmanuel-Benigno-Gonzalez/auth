import { View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import formStyle from "../styles/form";
import { loginApi } from "../api/user";
import Toast from "react-native-root-toast";
import useAuth from "../hooks/useAuth";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm(props) {
  const { changeForm } = props;

  const auth = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(auth);
      try {
        const user = await loginApi(formData);
        auth.user = user;
        if (user.statusCode) throw "Error en el usuario o contraseña";
        console.log(user);
        auth.login(user);
      } catch (error) {
        console.log("Error: " + console.error);
        Toast.show(error, {
          position: Toast.positions.CENTER,
        });
      }
    },
  });

  function initialValues() {
    return {
      identifier: "",
      password: "",
    };
  }

  function validationSchema() {
    return {
      identifier: Yup.string().email().required(true),
      password: Yup.string().required(true),
    };
  }

  return (
    <View>
      <TextInput
        label="Correo electróncio"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("identifier", text)}
        value={formik.values.identifier}
        error={formik.errors.identifier}
      />
      <TextInput
        label="Contraseña"
        style={formStyle.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <Button
        mode="text"
        style={formStyle.btnSucess}
        labelStyle={formStyle.btnTextLabel}
        onPress={formik.handleSubmit}
      >
        Iniciar Sesion
      </Button>
      <Button
        mode="text"
        style={formStyle.btnText}
        labelStyle={formStyle.btnTextLabel}
        onPress={changeForm}
      >
        Registrarse
      </Button>
    </View>
  );
}
