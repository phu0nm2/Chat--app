import {
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Tab,
  Tabs,
} from "@mui/material";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/slices/user";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {users.map((user, index) => (
        // user component
        <div key={index}>
          <h1>{user}</h1>
          <h1>Hello Friend</h1>
        </div>
      ))}
    </>
  );
};

const Friends = ({ open, handleClose }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">We are friend ^^!</DialogTitle>
      <Stack p={2} sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Explore"></Tab>
          <Tab label="Friends"></Tab>
          <Tab label="Requests"></Tab>
        </Tabs>
      </Stack>
      <DialogContent>
        <Stack spacing={2} sx={{ height: "100%" }}>
          {(() => {
            switch (value) {
              case 0: // get users
                return <UserList />;

              case 1: // get friends
                break;

              case 2: // get friend request
                break;

              default:
                break;
            }
          })()}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
