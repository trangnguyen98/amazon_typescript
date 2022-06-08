import {
  Box,
  Button,
  Divider,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { MessageFormatElement } from "react-intl";
import { FORM_REGISTER } from "../../../common/contants/form.constant";
import { BoxWrapper, ButtonWrapper, RegisterFormWrapper } from "./styled";
import yup from "libs/yup";

const RegistrationForm: React.FC = () => {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   console.log("clicked");
  // };
  const validationSchema = (
    messages: Record<string, string> | Record<string, MessageFormatElement[]>
  ) =>
    yup.object().shape({
      email: yup
        .string()
        .trim()
        .required(messages["forms.error.email.required"].toString())
        .matches(
          // eslint-disable-next-line no-useless-escape
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
          messages["forms.error.email.valid"].toString()
        ),
      password: yup
        .string()
        .required(messages["forms.error.password.required"].toString())
        .min(8, messages["forms.error.password.min"].toString())
        .max(50, messages["forms.error.password.max"].toString())
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          messages["forms.error.password.regex"].toString()
        ),
      passwordConfirm: yup
        .string()
        .required(messages["forms.error.password_confirm.required"].toString())
        .oneOf(
          [yup.ref("password")],
          messages["forms.error.passwordConfirm.match"].toString()
        ),
    });
  return (
    <RegisterFormWrapper>
      <Formik
        initialValues={FORM_REGISTER}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={validationSchema(messages)}
      >
        {(formikProps) => {
          const { values, errors, touched } = formikProps;
          console.log({ values, errors, touched });
          return (
            <Form>
              <BoxWrapper>
                <div className="box-register">
                  <Typography
                    sx={{ marginBottom: 1 }}
                    variant="h5"
                    component="h1"
                  >
                    cretae acount
                  </Typography>
                  <InputLabel
                    sx={{ fontWeight: 500, color: "#000000" }}
                    htmlFor="name"
                  >
                    Your name
                  </InputLabel>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="name"
                    name="name"
                    label="First and last name"
                    size="small"
                    sx={{ marginBottom: 2 }}
                  />

                  <InputLabel
                    sx={{ fontWeight: 500, color: "#000000" }}
                    htmlFor="email"
                  >
                    Mobile number or email
                  </InputLabel>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="email"
                    name="email"
                    size="small"
                    sx={{ marginBottom: 2 }}
                  />

                  <InputLabel
                    sx={{ fontWeight: 500, color: "#000000" }}
                    htmlFor="password"
                  >
                    Password
                  </InputLabel>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="password"
                    name="password"
                    label="At least 6 characters"
                    size="small"
                    sx={{ marginBottom: 2 }}
                  />

                  <InputLabel
                    sx={{ fontWeight: 500, color: "#000000" }}
                    htmlFor="passwordConfirm"
                  >
                    Re-enter password
                  </InputLabel>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="text"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    size="small"
                    sx={{ marginBottom: 2 }}
                  />
                  <ButtonWrapper fullWidth variant="contained" type="submit">
                    Register
                  </ButtonWrapper>
                  <div className="register-rules">
                    <span>By creating an account, you agree to Amazon's</span>
                    <span>
                      <a href="#"> Conditions of Use</a> and
                      <a href="#"> Privacy Notice.</a>
                    </span>
                  </div>
                  <Divider variant="middle" />
                  <div className="register-account">
                    <div>
                      Already have an account?
                      <Link to="/signin"> Sign-In</Link>
                    </div>
                    <div>
                      Buying for work?
                      <a href="#"> Create a free business account</a>
                    </div>
                  </div>
                </div>
              </BoxWrapper>
            </Form>
          );
        }}
      </Formik>
    </RegisterFormWrapper>
  );
};

export default RegistrationForm;
