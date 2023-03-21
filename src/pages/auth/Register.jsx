import React from "react";

import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../components/Sections/auth/RegisterForm";
import AuthSocial from "../../components/Sections/auth/AuthSocial";

const Register = () => {
  return (
    <Stack bgcolor={"#ede5e5"} p={2} sx={{ borderRadius: 2 }}>
      <Stack>
        <Typography sx={{ color: "#000" }} variant="h4">
          Welcome to Talk
        </Typography>
      </Stack>
      <Stack direction={"row"} spacing={1} mt={2}>
        <Typography variant="subtitle" sx={{ color: "#000" }}>
          Already have an account?
        </Typography>
        <Link to="/auth/login" component={RouterLink}>
          Login
        </Link>
      </Stack>

      {/* Register form */}
      <Stack spacing={2} mb={2}>
        <RegisterForm />
      </Stack>

      {/* Auth social */}
      <AuthSocial />
    </Stack>
  );
};

export default Register;
