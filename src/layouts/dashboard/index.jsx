import React from "react";

import { Stack } from "@mui/material";

import GeneralApp from "../../pages/dashboard/GeneralApp";
import SideBar from "./SideBar";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/app";
import {
  addDirectConversation,
  addDirectMessage,
  selectConversation,
  updateDirectConversation,
} from "../../redux/slices/conversation";
// import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { conversations, current_conversation } = useSelector(
    (state) => state.conversation.direct_chat,
  );

  const dispatch = useDispatch();

  const user_id = localStorage.getItem("user_id");

  React.useEffect(() => {
    //
    if (isLogin) {
      if (!socket) {
        connectSocket(user_id);
      }

      // new mess
      socket.on("new_message", (data) => {
        const message = data.message;
        console.log(current_conversation, data);
        // check if msg we got is from currently selected conversation
        if (current_conversation?.id === data.conversation_id) {
          dispatch(
            addDirectMessage({
              id: message._id,
              type: "msg",
              subtype: message.type,
              message: message.text,
              incoming: message.to === user_id,
              outgoing: message.from === user_id,
            }),
          );
        }
      });

      // new friend request
      socket.on("new_friend_request", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "New friend request received",
          }),
        );
      });

      socket.on("request_accepted", (data) => {
        dispatch(
          showSnackbar({
            severity: "success",
            message: "Friend Request Accepted",
          }),
        );
      });

      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }));
      });

      socket.on("start_chat", (data) => {
        console.log("start_chat", data);

        // add / update to conversation list
        const existing_conversation = conversations.find(
          (item) => item?.id === data._id,
        );

        if (existing_conversation) {
          // updaate direct conversation
          dispatch(updateDirectConversation({ conversation: data })); // params: conversation
        } else {
          // add direct conversation
          dispatch(addDirectConversation({ conversation: data }));
        }
        dispatch(selectConversation({ room_id: data._id }));
      });
    }
    // remove listener when the component unmout
    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat");
      socket?.off("new_message");
    };
  }, [user_id, dispatch, conversations, isLogin]);

  if (!isLogin) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <>
      <Stack direction={"row"}>
        {/* SideBar */}
        <SideBar />

        {/* <Outlet /> */}
        <GeneralApp />
      </Stack>
    </>
  );
};

export default DashboardLayout;
