import { faker } from "@faker-js/faker";
import { createSlice } from "@reduxjs/toolkit";

const user_id = localStorage.getItem("user_id");
const initialState = {
  group_chat: {},

  direct_chat: {
    conversations: [],
    current_conversation: null,
    current_message: [],
  },

  chat_type: null,
  room_id: null,
};

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    getDirectConversations(state, action) {
      state.direct_chat.conversations = action.payload.conversations.map(
        (el) => {
          const user = el.participants.find(
            (elm) => elm._id.toString() !== user_id,
          );
          return {
            id: el._id,
            user_id: user?._id,
            img: faker.image.avatar(),
            name: `${user?.fistName} ${user?.lastName}`,
            msg: el.messages.slice(-1)[0].text,
            time: "9:36",
            unread: 0,
            pinned: false,
            online: false,
          };
        },
      );
    },

    selectConversation(state, action) {
      state.chat_type = "individual";
      state.room_id = action.payload.room_id;
    },

    setCurrentConversation(state, action) {
      state.direct_chat.current_conversation = action.payload;
    },

    fetchCurrentMessages(state, action) {
      const messages = action.payload.messages;
      const formatted_messages = messages.map((el) => ({
        id: el._id,
        type: "msg",
        subtype: el.type,
        message: el.text,
        incoming: el.to === user_id,
        outgoing: el.from === user_id,
      }));
      state.direct_chat.current_message = formatted_messages;
    },

    addDirectMessages(state, action) {
      state.direct_chat.current_message.push(action.payload.message);
    },

    updateDirectConversation(state, action) {
      // list.id === data._id
      const this_conversation = action.payload.conversation;
      state.direct_chat.conversations = state.direct_chat.conversations.map(
        (item) => {
          if (item.id !== this_conversation._id) {
            return item;
          } else {
            const user = this_conversation.participants.find(
              (item) => item.id.toString() !== user_id,
            );
            return {
              id: this_conversation._id,
              user_id: user?._id,
              img: faker.image.avatar(),
              name: `${user?.fistName} ${user?.lastName}`,
              msg: faker.music.songName(),
              time: "9:36",
              unread: 0,
              pinned: false,
              online: false,
            };
          }
        },
      );
    },

    addDirectConversation(state, action) {
      // list.push(data)
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (item) => item.id.toString() !== user_id,
      );

      //

      state.direct_chat.conversations.push({
        id: this_conversation._id,
        user_id: user?._id,
        img: faker.image.avatar(),
        name: `${user?.fistName} ${user?.lastName}`,
        msg: faker.music.songName(),
        time: "9:36",
        unread: 0,
        pinned: false,
        online: false,
      });
    },
  },
});

export default slice.reducer;

export const selectConversation =
  ({ room_id }) =>
  async (dispatch) => {
    try {
      //
      dispatch(slice.actions.selectConversation({ room_id }));
    } catch (error) {
      console.log(error);
    }
  };

export const fetchDirectConversations =
  ({ conversations }) =>
  async (dispatch) => {
    try {
      //
      dispatch(slice.actions.getDirectConversations({ conversations }));
      // console.log(conversations);
    } catch (error) {
      console.log(error);
    }
  };

export const updateDirectConversation =
  ({ conversation }) =>
  async (dispatch) => {
    try {
      //
      dispatch(slice.actions.updateDirectConversation({ conversation }));
    } catch (error) {
      console.log(error);
    }
  };

export const addDirectConversation =
  ({ conversation }) =>
  async (dispatch) => {
    try {
      //
      dispatch(slice.actions.addDirectConversation({ conversation }));
    } catch (error) {
      console.log(error);
    }
  };

export const setCurrentConversation =
  ({ current_conversation }) =>
  async (dispatch) => {
    try {
      dispatch(slice.actions.setCurrentConversation(current_conversation));
    } catch (error) {
      console.log(error);
    }
  };

export const fetchCurrentMessage =
  ({ messages }) =>
  async (dispatch) => {
    try {
      dispatch(slice.actions.fetchCurrentMessages(messages));
    } catch (error) {
      console.log(error);
    }
  };
export const addDirectMessage =
  ({ message }) =>
  async (dispatch) => {
    try {
      dispatch(slice.actions.addDirectMessages(message));
    } catch (error) {
      console.log(error);
    }
  };
