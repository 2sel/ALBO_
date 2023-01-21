import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";
import { playlistApi } from "../../api/apihttp";
import { videoApi, DataFilter } from "../../api/apihttp";

interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const getMusic = createAsyncThunk(
  "todos/getTodo",
  async (_, thunkAPI) => {
    try {
      let finaldata = [];
      const data = await axios.get(playlistApi);
      console.log(data.data.items);
      for (let listvideodata of data.data.items) {
        const videoid = listvideodata.contentDetails.videoId;
        const videodata = await axios.get(videoApi(videoid));
        console.log(videodata);
        finaldata.push(videodata.data.items[0]);
      }
      console.log(DataFilter(finaldata));
      return thunkAPI.fulfillWithValue(DataFilter(finaldata));
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  rank: [],
  isLoading: false,
  //   error: null,
};

const todosSlice = createSlice({
  name: "rank",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMusic.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.rank = action.payload;
    });
    builder.addCase(getMusic.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

// export const { addTodo, deleteTodo, toggleTodo, updateTodo, toggleDisplay } =
//   todosSlice.actions;
export default todosSlice.reducer;
