import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { List_Keyboard } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShortcutDialog = ({ open, handleClose }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      handleClose={handleClose}
      keepMounted
      TransitionComponent={Transition}
    >
      <DialogTitle>Keyboard Shorcuts</DialogTitle>
      <DialogContent>
        <Grid>
          {List_Keyboard.map(({ key, title, combination }) => (
            <Box key={key}>
              <Grid item xs={6}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  direction={"row"}
                  spacing={3}
                >
                  <Typography variant="title">{title}</Typography>
                </Stack>
              </Grid>
            </Box>
          ))}
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ShortcutDialog;
