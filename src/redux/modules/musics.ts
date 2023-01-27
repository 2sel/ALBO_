import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AppDispatch } from "../config/configStore";
import { RootState } from "../config/configStore";
import { playlistApi } from "../../api/apihttp";
import { videoApi, DataFilter, playlisturl } from "../../api/apihttp";
interface datatype {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
  displaytoggle: boolean;
}

export const getMusic = createAsyncThunk(
  "musics/getMusic",
  async (payload: string, thunkAPI) => {
    try {
      let finaldata = [];
      const data = await axios.get(playlistApi(payload));
      for (let listvideodata of data.data.items) {
        const videoid = listvideodata.contentDetails.videoId;
        const videodata = await axios.get(videoApi(videoid));
        finaldata.push(videodata.data.items[0]);
      }
      let filteredData = DataFilter(finaldata);

      return thunkAPI.fulfillWithValue(filteredData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  musics: [],
  isLoading: false,
  //   error: null,
};

const todosSlice = createSlice({
  name: "musics",
  initialState,
  reducers: {
    getPlaylist: (state, action) => {
      state.musics = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getTodo
    builder.addCase(getMusic.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getMusic.fulfilled, (state: any, action) => {
      state.isLoading = false;
      state.musics = action.payload;
    });
    builder.addCase(getMusic.rejected, (state, action) => {
      state.isLoading = false;
      //   state.error = action.payload;
    });
  },
});

export const { getPlaylist } = todosSlice.actions;
export default todosSlice.reducer;
