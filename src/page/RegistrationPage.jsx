import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { CreateUser } from "../service/user_service";

const RegistrationPage = () => {
  const [register, setRegister] = useState(false);
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        email: "",
        photoUrl: "",
        password: "",
        repeatPassword: "",
      }}
      validationSchema={Yup.object({
        nombre: Yup.string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("El campo es obligatorio"),

        apellido: Yup.string()
          .max(15, "Debe tener 15 caracteres o menos")
          .required("El campo es obligatorio"),

        email: Yup.string()
          .email("Dirección de correo invalida")
          .required("Campo obligatorio"),

        password: Yup.string()
          .min(8, "La contraseña debe tener como mínimo 8 caracteres")
          .matches(
            /[A-Z]/,
            "La contraseña debe tener al menos una letra mayúscula"
          )
          .matches(/[0-9]/, "La contraseña debe tener al menos un número")
          .required("El campo es obligatorio"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        if (values.password !== values.repeatPassword) {
          console.log("Las contraseñas no coinciden");
          setSubmitting(false);
          return;
        }
        CreateUser({
          nombre: values.nombre,
          apellido: values.apellido,
          email: values.email,
          password: values.password,
        })
          .then((Response) => {
            setRegister(true);
            console.log("Usuario creado con exito");
            navigate("/");
          })
          .catch((error) => {
            console.log("Error al crear el usuario", error);
          })
          .finally(() => {
            setSubmitting(false);
            setTimeout(() => {
              setRegister(false);
            }, 1000);
          });
      }}
    >
      <Form
        className="flex justify-center p-5 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('../src/assets/azul.png')`,
        }}
      >
        <div className="flex flex-col justify-center items-center w-1/4 bg-transparent">
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-gray-400 text-sm">
              Nombre
            </label>
            <Field
              name="nombre"
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-500 appearnce-none dark:focus:border-green-500 focus:outline-none"
            />
            <ErrorMessage
              name="nombre"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="p-5 flex flex-col">
            <label htmlFor="apellido" className="text-gray-400 text-sm">
              Apellido
            </label>
            <Field
              name="apellido"
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-500 appearnce-none dark:focus:border-green-500 focus:outline-none"
            />
            <ErrorMessage
              name="apellido"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="p-5 flex flex-col">
            <label htmlFor="email" className="text-gray-400 text-sm">
              Email
            </label>
            <Field
              name="email"
              type="email"
              autoComplete="off"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-500 appearnce-none dark:focus:border-green-500 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="p-5 flex flex-col">
            <label htmlFor="password" className="text-gray-400 text-sm">
              Contraseña
            </label>
            <Field
              name="password"
              type="password"
              autoComplete="new-password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-500 appearnce-none dark:focus:border-green-500 focus:outline-none"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="p-5 flex flex-col">
            <label htmlFor="repeatPassword" className="text-gray-400 text-sm">
              Repetir contraseña
            </label>
            <Field
              name="repeatPassword"
              type="password"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-orange-500 appearnce-none dark:focus:border-green-500 focus:outline-none"
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="p-5 flex flex-col items-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
