import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { List_Keyboard } from "../../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ShortcutDialog = (props) => {
  const { open, handleClose } = props;

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={open}
      onClose={handleClose}
      keepMounted
      TransitionComponent={Transition}
    >
      <DialogTitle>Keyboard Shorcuts</DialogTitle>
      <DialogContent>
        <Grid>
          {List_Keyboard.map(({ key, title, combination }) => (
            <Grid key={key} item xs={6}>
              <Stack
                sx={{ width: "100%" }}
                justifyContent={"space-between"}
                alignItems={"center"}
                direction={"row"}
                spacing={2}
              >
                <Typography variant="title">{title}</Typography>
                <Stack direction={"row"} spacing={2} p={1}>
                  {combination.map((item, i) => (
                    <Button disabled variant="contained" key={i}>
                      {item}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShortcutDialog;
