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
import {
  fetchFriendRequests,
  fetchFriends,
  fetchUsers,
} from "../../../redux/slices/user";
import Users from "../../UserElements/Users";
import FriendElement from "../../UserElements/Friends";
import FriendRequestElement from "../../UserElements/FriendRequest";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user || {});

  // const { data } = users?.data;

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {users.data?.data?.map((user, index) => (
        // user component
        <Users key={user._id} {...user} />
      ))}
    </>
  );
};

const FriendList = () => {
  const dispatch = useDispatch();

  const { friends } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <>
      {friends.data?.data?.map((friend, index) => (
        // user component
        <FriendElement key={index} {...friend} />
      ))}
    </>
  );
};

const FriendRequest = () => {
  const dispatch = useDispatch();

  const { friendRequests } = useSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(fetchFriendRequests());
  }, [dispatch]);

  return (
    <>
      {friendRequests.data?.data?.map((friendRequest, index) => (
        // user component
        <FriendRequestElement
          key={index}
          {...friendRequest.sender}
          id={friendRequest._id}
        />
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
                return <FriendList />;

              case 2: // get friend request
                return <FriendRequest />;

              default:
                return <UserList />;
            }
          })()}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default Friends;
