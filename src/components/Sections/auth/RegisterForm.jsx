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
  TextField,
  Typography,
} from "@mui/material";

import FormProvider from "../../hook-form/FormProvider";

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
    email: "teppppp2@gmail.com",
    password: "ab123456",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    register,
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
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormProvider
      methods={methods}
      onSubmit={handleSubmit(handleSubmit(onSubmit))}
    >
      {" "}
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
            <TextField
              sx={{
                input: { color: "#000" },
              }}
              id="firstname"
              name="firstname"
              label="Your first name"
              {...register("firstName", { required: true })}
            />
          </Stack>
          <Stack>
            <TextField
              sx={{
                input: { color: "#000" },
              }}
              id="lastname"
              name="lastname"
              label="Your last name"
              {...register("lastName", { required: true })}
            />
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
          <TextField
            sx={{
              input: { color: "#000" },
            }}
            {...register("email", { required: true })}
            name="email"
            id="email"
            label="Your email"
          />
          {errors.email && (
            <Typography variant="caption" color={"red"}>
              Email must be a valid email address
            </Typography>
          )}

          <TextField
            sx={{ input: { color: "#000" } }}
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Your password"
            value={defaultValues.password}
            {...("password", { required: true })}
            inputProps={{
              endadornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
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
