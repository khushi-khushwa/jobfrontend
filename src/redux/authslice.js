
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant.js";
import { toast } from "sonner";




export const logoutApi = createAsyncThunk("logout", async () => {
     try {
      // Request the backend to clear the token cookie
      const res = await axios.get(
        `${USER_API_END_POINT}/logout`,
        {},
        {
          withCredentials: true, // Ensure credentials are sent with the request
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      );
      console.log(res)
      if (res.data.success) {
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error logging out");
    }
  }
)


const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    success:false
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logoutApi.fulfilled, (state) => {
        state.success = true;
      })
        .addCase(logoutApi.rejected, (state, action) => {
          console.log(action.payload);
        state.loading = false;
        // toast.error(action.payload.message);
      });
  },
});

export const {setLoading, setUser} = authSlice.actions;

export default authSlice.reducer;