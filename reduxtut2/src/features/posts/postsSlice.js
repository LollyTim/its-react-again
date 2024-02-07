import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Doing hard things",
    content:
      "Doing hard things in the place of consistency be consistence in what you do",
  },
  {
    id: "2",
    title: "Pray Continually",
    content: "Dont stop praying if you stop raying you will fall a pray",
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
      prepare(title, content, userid) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
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
