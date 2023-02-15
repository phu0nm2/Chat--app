import React from "react";

import { IconButton, Divider, Stack, Button } from "@mui/material";
import {
  FacebookLogo,
  GithubLogo,
  GoogleLogo,
  TwitterLogo,
} from "phosphor-react";

const AuthSocial = () => {
  return (
    <Stack direction={"column"} width={"100%"}>
      <Stack alignItems={"center"} mb={2} sx={{ color: "text.disabled" }}>
        <Divider />
        OR
        <Divider />
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
      >
        {/* fb, email */}
        <IconButton>
          <GoogleLogo width={40} height={40} color="red" />
        </IconButton>
        <IconButton>
          <FacebookLogo width={40} height={40} color="#303e97" />
        </IconButton>
        <IconButton>
          <TwitterLogo width={40} height={40} color="#4a93e8" />
        </IconButton>
        <IconButton>
          <GithubLogo width={40} height={40} />
        </IconButton>
      </Stack>

      <Stack sx={{ width: "100%" }} p={2} alignItems={"center"}>
        <Button
          size="large"
          sx={{ width: 300 }}
          color="secondary"
          variant="contained"
        >
          Login
        </Button>
      </Stack>
    </Stack>
  );
};

export default AuthSocial;
