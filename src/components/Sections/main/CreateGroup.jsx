import React from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { XCircle } from "phosphor-react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../hook-form/FormProvider";
import RHFTextField from "../../hook-form/RHFTextField";
import RHFAutocomplete from "../../hook-form/RHFAutocomplete";

const MEMBERS = [
  {
    label: "Member 1",
  },
  {
    label: "Member 2",
  },
  {
    label: "Member 3",
  },
  {
    label: "Member 4",
  },
  {
    label: "Member 5",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateGroupForm = ({}) => {
  const schema = yup.object().shape({
    title: yup.string().required("This is required!"),
    members: yup.array().min(2, "Must have a least 2 members"),
  });

  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    watch,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful, isValid },
  } = methods;

  const onSubmit = async (data) => {
    try {
      // data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} p={2}>
        <RHFTextField name="title" label="Group Name" />
        <RHFAutocomplete
          name="members"
          label="Members"
          multiple
          options={MEMBERS}
          // ChipProps={{ size: "Medium" }}
        />
      </Stack>
      <Stack direction={"row"} justifyContent={"center"}>
        <Button
          type="submit"
          variant="contained"
          size="medium"
          sx={{ width: 200 }}
        >
          Create
        </Button>
      </Stack>
    </FormProvider>
  );
};

const CreateGroup = ({ open, handleClose }) => {
  const theme = useTheme();

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
    >
      {/* Title */}
      <DialogTitle
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(25,28,36,0.1)"
              : theme.palette.background.default,
        }}
      >
        <Stack
          mb={2}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h3">Create New Group</Typography>
          <IconButton onClick={handleClose}>
            <XCircle />
          </IconButton>
        </Stack>
      </DialogTitle>
      {/* Content */}
      <DialogContent
        sx={{
          background:
            theme.palette.mode === "light"
              ? "rgba(25,28,36,0.1)"
              : theme.palette.background.default,
        }}
      >
        {/* form */}
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
