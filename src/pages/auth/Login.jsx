import { Box, Link, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AuthSocial from "../../components/Sections/auth/AuthSocial";
import LoginForm from "../../components/Sections/auth/LoginForm";

const Login = () => {
  return (
    <Stack>
      <Stack mb={2}>
        <Typography variant="h4">Login to Talk</Typography>
      </Stack>

      {/* Login form */}
      <LoginForm />

      <Stack direction={"row"} spacing={1} p={3}>
        <Typography variant="subtitle">New user?</Typography>
        <Link to="/auth/resgister" component={RouterLink} variant="subtitle">
          Create an account
        </Link>
      </Stack>
      {/* Auth Social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
