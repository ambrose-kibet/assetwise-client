import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { customAxios } from '../../../utils/config';
import { logoutUser } from '../auth/authSlice';
import { toast } from 'react-toastify';
export type altImage = {
  _id: string;
  url: string;
  public_id: string;
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

type Tfilters = {
  [key: string]: string | number | boolean | string[] | undefined;
  page: number;
  limit: number;
  adress?: string;
  county: string;
  type: string;
  category: string;
  bedrooms: string;
  bathrooms: string;
  price: number;
  acreage: number;
};

type PropertyState = {
  isLoading: boolean;
  properties: Partial<TProperty>[];
  featuredProperties: Partial<TProperty>[];
  property: TProperty;
  isEditing: boolean;
  selectedProperty: TProperty | null;
  filters: Tfilters;
  minAcreage: number;
  maxAcreage: number;
  minPrice: number;
  maxPrice: number;
  pages: number;
  flagId: string;
  imageFlagId: string;
};
const filters: Tfilters = {
  page: 1,
  limit: 9,
  county: 'all',
  type: 'all',
  category: 'all',
  bedrooms: 'all',
  bathrooms: 'all',
  adress: '',
  price: 0,
  acreage: 0,
};

const initialState: PropertyState = {
  isLoading: false,
  properties: [],
  featuredProperties: [],
  flagId: '',
  imageFlagId: '',
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
    status: 'available',
    bathrooms: undefined,
    acreage: undefined,
    amenity: '',
    amenities: [],
    images: [],
  },
  minAcreage: 0,
  maxAcreage: 0,
  minPrice: 0,
  maxPrice: 0,
  pages: 1,
  filters,
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
  async (filterUrl: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.get('/properties' + filterUrl);
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
export const deleteProperty = createAsyncThunk(
  'property/deleteProperty',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.delete(`/properties/${id}`);
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
export const deleteImage = createAsyncThunk(
  'property/deleteImage',
  async (id: string, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await customAxios.delete(`/images/${id}`);
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
export const addImages = createAsyncThunk(
  'property/addImages',
  async (
    { images, propertyId }: { images: File[]; propertyId: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));
      const { data } = await customAxios.post(
        `/images/property/${propertyId}`,
        formData
      );
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
        }
      }
      return rejectWithValue('Something went wrong');
    }
  }
);
export const editproperty = createAsyncThunk(
  'property/editProperty',
  async (
    { property, propertyId }: { property: TProperty; propertyId: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await customAxios.patch(
        `/properties/${propertyId}`,
        property
      );
      return data;
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ msg: string }, unknown>;
        console.log(axiosError);
        if (axiosError.response) {
          if (axiosError.response.status === 401) {
            dispatch(logoutUser());
            return rejectWithValue('Unauthorized');
          }
          return rejectWithValue(axiosError.response.data.msg);
        } else if (axiosError.request) {
          return rejectWithValue('No response received');
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
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    setFilters: (state, { payload: { name, value } }) => {
      state.filters[name as keyof Tfilters] = value;
    },
    setFlagId: (state, { payload }: PayloadAction<string>) => {
      state.flagId = payload;
    },
    setEditing: (state, { payload }) => {
      state.isEditing = payload;
    },
    setImagesFlagId: (state, { payload }: PayloadAction<string>) => {
      state.imageFlagId = payload;
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
        state.maxAcreage = payload.maxAcreage;
        state.minPrice = payload.minPrice;
        state.maxPrice = payload.maxPrice;
        state.pages = payload.numberOfPages;
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
        if (state.isEditing)
          state.property = { ...state.property, ...payload.data };
        state.selectedProperty = payload.data;
      })
      .addCase(getSingeProperty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(deleteProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProperty.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.properties = state.properties.filter(
          (property) => property._id !== payload.data._id
        );
        toast.success('Property deleted successfully', {
          position: 'top-center',
        });
      })
      .addCase(deleteProperty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(deleteImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteImage.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.property.images! = (state.property.images as altImage).filter(
          (image) => image._id !== payload.data._id
        );
        toast.success('Image deleted successfully', {
          position: 'top-center',
        });
      })
      .addCase(deleteImage.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(addImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addImages.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.property.images = [
          ...(state.property.images as altImage),
          ...payload.data,
        ];
        toast.success('Images added successfully', {
          position: 'top-center',
        });
      })
      .addCase(addImages.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
    builder
      .addCase(editproperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editproperty.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.property = initialState.property;
        state.properties = state.properties.map((property) =>
          property._id === payload.data._id ? payload.data : property
        );
        state.isEditing = false;
        toast.success('Property edited successfully', {
          position: 'top-center',
        });
      })
      .addCase(editproperty.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload as string, {
          position: 'top-center',
        });
      });
  },
});

export const {
  handleInput,
  removeAmenity,
  setPropertyEditing,
  clearProperty,
  clearFilters,
  setFilters,
  setFlagId,
  setEditing,
  setImagesFlagId,
} = propertySlice.actions;

export default propertySlice.reducer;
