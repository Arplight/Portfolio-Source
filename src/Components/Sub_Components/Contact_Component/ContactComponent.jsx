import { Formik, Form, Field, ErrorMessage } from "formik";
// Hooks
import { useFocus } from "../../Hooks/useFocus";
// Schema
import { ContactSchema } from "./ValidationSchema";
// Contexts
import { useContext, useEffect, useRef } from "react";
import { ToastContext } from "../../Contexts/ToastProvider";
//Animation
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import axios from "axios";
export default function ContactComponent() {
  const [focus, focusSetter] = useFocus();
  const toastHandler = useContext(ToastContext);
  const formikValues = useRef("");
  // Session Storage
  useEffect(() => {
    const currentValues = formikValues.current.values;
    sessionStorage.setItem("formName", currentValues.name);
    sessionStorage.setItem("formMail", currentValues.mail);
    sessionStorage.setItem("formMessage", currentValues.message);
  }, [focus]);

  return (
    <div className="contact-form flex flex-col justify-start lg:justify-center items-center w-full h-full">
      <Slide top>
        <h1 className="mb-12">Want to work with me?</h1>
      </Slide>
      <Formik
        innerRef={formikValues}
        initialValues={{
          name:
            sessionStorage.getItem("formName") === null
              ? ""
              : sessionStorage.getItem("formName"),
          mail:
            sessionStorage.getItem("formMail") === null
              ? ""
              : sessionStorage.getItem("formMail"),
          message:
            sessionStorage.getItem("formMessage") === null
              ? ""
              : sessionStorage.getItem("formMessage"),
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              "https://formspree.io/f/myyqrzey",
              values
            );
            if (response.status === 200) {
              resetForm();
              toastHandler();
              sessionStorage.setItem("formName", "");
              sessionStorage.setItem("formMail", "");
              sessionStorage.setItem("formMessage", "");
            }
          } catch (error) {
            console.log("error");
          }
        }}
      >
        <Form>
          <div className="flex gap-10 flex-col md:flex-row">
            <Fade left delay={500}>
              <label htmlFor="name" className="w-full md:w-1/2">
                <p className={focus === "field-1" ? "field-inside" : ""}>
                  Name
                </p>
                <Field
                  className=" form-dark form-light"
                  type="text"
                  name="name"
                  id="name"
                  data-focus="field-1"
                  onFocus={focusSetter}
                  maxLength={21}
                />
                <ErrorMessage
                  name="name"
                  id="name"
                  className="error"
                  component="div"
                />
              </label>
            </Fade>
            <Fade left delay={400}>
              <label htmlFor="mail" className="w-full md:w-1/2">
                <p className={focus === "field-2" ? "field-inside" : ""}>
                  E-mail
                </p>
                <Field
                  className=" form-dark form-light"
                  type="email"
                  name="mail"
                  id="mail"
                  data-focus="field-2"
                  onFocus={focusSetter}
                />

                <ErrorMessage
                  name="mail"
                  id="mail"
                  className="error"
                  component="div"
                />
              </label>
            </Fade>
          </div>
          <Fade left delay={600}>
            <label htmlFor="message" className="w-full">
              <p className={focus === "field-3" ? "field-inside" : ""}>
                What I need to know ?
              </p>
              <Field
                component="textarea"
                className=" form-dark form-light"
                name="message"
                id="message"
                data-focus="field-3"
                onFocus={focusSetter}
              />

              <ErrorMessage
                name="message"
                id="message"
                className="error"
                component="div"
              />
            </label>
          </Fade>
          <Fade delay={1000}>
            <button
              className="main-button button-light button-dark w-full lg:w-max self-center"
              type="submit"
            >
              GET IN TOUCH
            </button>
          </Fade>
        </Form>
      </Formik>
    </div>
  );
}
