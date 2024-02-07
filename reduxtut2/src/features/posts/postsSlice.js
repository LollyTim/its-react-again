import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "Doing hard things",
    content:
      "Doing hard things in the place of consistency be consistence in what you do",
    date: sub(new Date(), { minutes: 10 }).toISOSring(),
  },
  {
    id: "2",
    title: "Pray Continually",
    content: "Dont stop praying if you stop raying you will fall a pray",
    date: sub(new Date(), { minutes: 10 }).toISOSring(),
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userid, date) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date,
            userid,
          },
        };
      },
    },
  },
});

export const selectAllposts = (state) => state.posts;
export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
