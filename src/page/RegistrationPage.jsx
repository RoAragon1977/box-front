import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { CreateUser } from "../service/user_service";

const RegistrationPage = () => {
  return (
    <Formik
      initialValues={{
        nombre: "",
        apellido: "",
        email: "",
        photoUrl: "",
        password: "",
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

        photoUrl: Yup.mixed().test(
          "fileFormat",
          "Formato de imagen no soportado",
          (value) =>
            value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type)
        ),

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
        CreateUser({
          nombre: values.nombre,
          apellido: values.apellido,
          email: values.email,
          password: values.password,
          photoUrl: values.photoUrl,
        });
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form
        className="flex justify-center pt-5 bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url('../src/assets/fondos-para-registro.jpg')`,
        }}
      >
        <div className="flex flex-col w-2/4 bg-transparent ">
          <div className="p-5 flex flex-col">
            <label htmlFor="nombre" className="text-gray-400 text-sm">
              Nombre
            </label>
            <Field
              name="nombre"
              type="text"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
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
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
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
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="p-5 flex flex-col">
            <label htmlFor="photoUrl" className="text-gray-400 text-sm">
              Agrega tu foto de perfil
            </label>
            <Field
              name="photoUrl"
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
            >
              {({ field, form }) => (
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    form.setFieldValue(
                      "photoUrl",
                      event.currentTarget.files[0]
                    );
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              name="photoUrl"
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
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
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
              className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-green-500 appearnce-none dark:focus:border-blue-900 focus:outline-none"
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
