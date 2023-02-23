import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import SideBar from "../../layouts/dashboard/SideBar";
import { CaretLeft } from "phosphor-react";
import { faker } from "@faker-js/faker";
import ProfileForm from "../../components/Sections/auth/ProfileForm";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/app");
  };

  return (
    <Stack direction={"row"}>
      <Stack>
        <SideBar />
      </Stack>
      <Box
        p={2}
        bgcolor={"#F8FAFF"}
        sx={{
          position: "relative",
          width: 320,
          height: "100vh",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} mt={1.5}>
          <IconButton onClick={handleBack}>
            <CaretLeft
              width={30}
              height={30}
              sx={{
                color: theme.palette.mode === "light" ? "#000000" : "#ffff",
              }}
            />
          </IconButton>
          <Typography
            variant="h2"
            sx={{ color: theme.palette.mode === "light" ? "#000000" : "#ffff" }}
          >
            Profile
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} alignItems={"center"} mt={4}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={faker.image.avatar()}
            alt={faker.name.fullName()}
          />
        </Stack>
        <Stack>
          <ProfileForm />
        </Stack>
      </Box>
    </Stack>
  );
};

export default Profile;
