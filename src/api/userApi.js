import axiosClient from "./axiosClient";

export const userApi = {
  signin: ({ email, password }) => {
    const url = "/auth/login";
    return axiosClient.post(
      url,
      {
        email,
        password,
      },
      {
        headers: {
          "Contet-Type": "application/json",
        },
      },
    );
  },

  signup: ({ firstName, lastName, email, password }) => {
    const url = "/auth/register";
    return axiosClient.post(
      url,
      { firstName, lastName, email, password },
      {
        headers: {
          "Contet-Type": "application/json",
        },
      },
    );
  },
};
