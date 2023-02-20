import React from "react";

import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import AuthSocial from "../../components/Sections/auth/AuthSocial";
import LoginForm from "../../components/Sections/auth/LoginForm";

const Login = () => {
  return (
    <Stack bgcolor={"#ede5e5"} p={2} sx={{ borderRadius: 2 }}>
      <Stack mb={2}>
        <Typography variant="h4">Login to Talk</Typography>
      </Stack>

      {/* Login form */}
      <Stack alignItems={"center"} justifyContent={"center"}>
        <LoginForm />
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        spacing={1}
        p={3}
      >
        <Stack direction={"row"} spacing={1}>
          <Typography variant="subtitle">New user?</Typography>

          {/* still got error with the route register */}
          <Link to="/auth/resgister" component={RouterLink} variant="subtitle">
            Create an account
          </Link>
        </Stack>
        <Stack>
          <Link variant="body2" color={"inherit"} underline="always">
            Forgot Password?
          </Link>
        </Stack>
      </Stack>
      {/* Auth Social */}
      <AuthSocial />
    </Stack>
  );
};

export default Login;
