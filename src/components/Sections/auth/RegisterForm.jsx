import React from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeSlash } from "phosphor-react";

import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material";

import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    email: yup
      .string()
      .required("Email is required!")
      .email("Email must be a valid email address!"),
    password: yup.string().required("Password is required!"),
  });

  const defaultValues = {
    firstName: "",
    lastName: "",
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
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(handleSubmit(onSubmit))}
    >
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}
      </Stack>
      <Box
        mt={2}
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack spacing={3} direction={"row"}>
          <Stack>
            <RHFTextField name="firstName" label="First name" />
          </Stack>
          <Stack>
            <RHFTextField name="lastName" label="Last name" />
          </Stack>
        </Stack>
      </Box>
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
          Create account
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default RegisterForm;
