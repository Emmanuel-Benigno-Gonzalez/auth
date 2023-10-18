import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import formStyle from "../styles/form";
import { useFormik } from "formik";
import * as Yup from "yup";
import {registerApi} from '../api/user'
//import Toast from 'react-native-root-toast'

export default function RegisterForm(props) {
  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      console.log(formData);
      try {
        const user = await registerApi(formData)
        console.log('Se registro')
        console.log(user)
      } catch (error) {
        console.log('Error: '+console.error) 
        /*Toast.show('Error...',{
        position:Toast.positions.CENTER
        });*/
      }
      
    },
  });

  function initialValues() {
    return {
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
    };
  }

  function validationSchema() {
    return {
      email: Yup.string().email().required(true),
      username: Yup.string().required(true),
      password: Yup.string().required(true),
      repeatPassword: Yup.string()
        .required(true)
        .oneOf([Yup.ref("password")], true),
    };
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Correo electróncio"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("email", text)}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <TextInput
        label="Nombre Usuario"
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        value={formik.values.username}
        error={formik.errors.username}
      />
      <TextInput
        label="Contraseña"
        style={formStyle.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("password", text)}
        value={formik.values.password}
        error={formik.errors.password}
      />
      <TextInput
        label="Confirmar contraseña"
        style={formStyle.input}
        secureTextEntry
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
      />
      <Button
        mode="text"
        style={formStyle.btnSucess}
        labelStyle={formStyle.btnTextLabel}
        onPress={formik.handleSubmit}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={formStyle.btnText}
        labelStyle={formStyle.btnTextLabel}
        onPress={changeForm}
      >
        Iniciar sesión
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
});
