import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "0",
    name: "Don lake",
  },
  {
    id: "2",
    name: "james killet",
  },
  {
    id: "3",
    name: "MLO Manny",
  },
  {
    id: "4",
    name: "LOllyTech",
  },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
