import React from "react";

import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormProvider from "../../hook-form/FormProvider";
import { Eye, EyeSlash } from "phosphor-react";
import RHFTextField from "../../hook-form/RHFTextField";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required!")
      .email("Email must be a valid email address!"),
    password: yup.string().required("Password is required!"),
  });

  const defaultValues = {
    email: "",
    password: "",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // submit data to BE
      console.log(data);
    } catch (error) {
      console.log("error", error);
      reset();
      setError("afterSubmit", { ...error, message: error.message });
    }
  };

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack spacing={3}>
          <RHFTextField name="email" label="Email" />
          <RHFTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            inputProps={{
              endadornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    {showPassword ? <Eye /> : <EyeSlash />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>

      <Stack sx={{ width: "100%" }} mt={2} alignItems={"center"}>
        <Button
          type="submit"
          size="large"
          sx={{ width: 300 }}
          color="secondary"
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default LoginForm;
