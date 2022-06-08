import React from "react";
import AuthLayout from "../features/auth/components/AuthLayout";
import RegistrationForm from "../features/auth/components/RegistrationForm";

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegistrationForm />
    </AuthLayout>
  );
};

export default RegisterPage;
