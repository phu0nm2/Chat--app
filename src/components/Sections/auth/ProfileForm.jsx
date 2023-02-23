import React from "react";

import { Alert, Box, Button, Stack } from "@mui/material";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";

const ProfileForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    about: yup.string().required("About is required!"),
    avatarURL: yup.string().required("File upload is required!").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    watch,
    control,
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch();

  const handleUploadFile = React.useCallback(
    (getFiles) => {
      const file = getFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (!!file) {
        setValue("avatarURL", newFile, { shouldValidate: true });
      }
    },
    [setValue],
  );

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
          <RHFTextField
            name="name"
            label="Name"
            helperText={"This name is visbile to your contacts"}
          />
          <RHFTextField
            multiline
            maxRows={5}
            name="about"
            label="About"
            helperText={"Hey there, I am learning from codingmonk"}
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
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
