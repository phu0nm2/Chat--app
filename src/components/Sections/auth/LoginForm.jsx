import React from "react";

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

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormProvider from "../../hook-form/FormProvider";
import { Eye, EyeSlash } from "phosphor-react";

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
    email: "teppppp2@gmail.com",
    password: "ab123456",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    // register,
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
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
        sx={{
          display: "flex",
          alignItems: "center",
          "& > :not(style)": { m: 1 },
        }}
      >
        <Stack spacing={3}>
          <TextField
            {...("email", { required: true })}
            name="email"
            id="email"
            label="Your email"
            // helperText={
            //   !!errors.afterSubmit
            //     ? errors.afterSubmit.message
            //     : "Please enter your name"
            // }
          />
          {/* {errors.email && (
            <Typography variant="caption" color={"red"}>
              This field is required
            </Typography>
          )} */}

          <TextField
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Your password"
            {...("password", { required: true })}
            // helperText={
            //   !!errors.afterSubmit
            //     ? errors.afterSubmit.message
            //     : "Please enter your password"
            // }
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
          {/* {errors.password && (
            <Typography variant="caption" color={"red"}>
              This field is required
            </Typography>
          )} */}
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
