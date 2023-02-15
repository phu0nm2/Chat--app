import React from "react";

import { Box, Stack, TextField } from "@mui/material";

const LoginForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& > :not(style)": { m: 1 },
      }}
    >
      <Stack spacing={3}>
        <TextField
          helperText="Please enter your name"
          id="demo-helper-text-aligned"
          label="Name"
        />

        <TextField
          helperText="Please enter your password"
          id="demo-helper-text-aligned"
          label="Password"
        />
      </Stack>
    </Box>
  );
};

export default LoginForm;
