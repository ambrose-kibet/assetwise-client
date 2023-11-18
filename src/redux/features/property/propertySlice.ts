import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { customAxios } from '../../../utils/config';
import { logoutUser } from '../auth/authSlice';
import { toast } from 'react-toastify';
export type altImage = {
  _id: string;
  url: string;
}[];
export type TProperty = {
  [key: string]: string | number | boolean | string[] | undefined | altImage;
  _id?: string;
  title: string;
  county: string;
  town: string;
  adress: string;
  price: number;
  type: string;
  category: string;
  featured: boolean;
  description: string;
  amenity?: string;
  area?: number;
  bedrooms?: number;
  status?: string;
  bathrooms?: number;
  acreage?: number;
  amenities?: string[];
  images?: string[] | altImage;
  createdAt?: string;
  updatedAt?: string;
};

type PropertyState = {
  isLoading: boolean;
  properties: Partial<TProperty>[];
  featuredProperties: Partial<TProperty>[];
  property: TProperty;
  isEditing: boolean;
  selectedProperty: TProperty | null;
};

const initialState: PropertyState = {
  isLoading: false,
  properties: [],
  featuredProperties: [],
  property: {
    title: '',
    county: 'Mombasa',
    town: '',
    adress: '',
    price: 0,
    type: 'buy',
    category: 'residential',
    featured: false,
    description: '',
    area: undefined,
    bedrooms: undefined,
    status: '',
    bathrooms: undefined,
    acreage: undefined,
    amenity: '',
    amenities: [],
    images: [],
  },
  isEditing: false,
  selectedProperty: null,
};

export const uploadImages = createAsyncThunk(
  'property/uploadImages',
  async (images: File[], { rejectWithValue, dispatch }) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));

      const { data } = await customAxios.post('/images/upload', formData);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
export const addProperty = createAsyncThunk(
  'property/addProperty',
  async (property: TProperty, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.post('/properties', property);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);

export const fetchProperties = createAsyncThunk(
  'property/fetchProperties',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get('/properties');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
export const getFeaturedProperties = createAsyncThunk(
  'property/getFeaturedProperties',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get('/properties/featured');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
export const getAllProperties = createAsyncThunk(
  'property/getAllProperties',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get('/properties');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
export const getSingeProperty = createAsyncThunk(
  'property/getSingleProperty',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get(`/properties/${id}`);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized Logging you out...');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        } else {
          return rejectWithValue('Network error');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    handleInput: (state, { payload: { name, value } }) => {
      state.property[name as keyof TProperty] = value;
    },
    removeAmenity: (state, { payload }) => {
      state.property.amenities = state.property.amenities?.filter(
        (amenity) => amenity !== payload
      );
    },
    setPropertyEditing: (state, { payload }: PayloadAction<boolean>) => {
      state.isEditing = payload;
    },

    clearProperty: (state) => {
      state.property = initialState.property;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadImages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.property.images = payload.urls;
        console.log(state.property.images);
        toast.success('Images uploaded successfully', {
          position: 'top-center',
        });
      })
      .addCase(uploadImages.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(addProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProperty.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.properties.push(payload.data);
        state.property = initialState.property;
        toast.success('property added sucessfully', {
          position: 'top-center',
        });
      })
      .addCase(addProperty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });

    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProperties.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.properties = payload.data;
      })
      .addCase(fetchProperties.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(getFeaturedProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeaturedProperties.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.featuredProperties = payload.data;
      })
      .addCase(getFeaturedProperties.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(getAllProperties.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProperties.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.properties = payload.data;
      })
      .addCase(getAllProperties.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(getSingeProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingeProperty.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.selectedProperty = payload.data;
      })
      .addCase(getSingeProperty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
  },
});

export const { handleInput, removeAmenity, setPropertyEditing, clearProperty } =
  propertySlice.actions;

export default propertySlice.reducer;
