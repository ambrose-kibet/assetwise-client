import { toast } from 'react-toastify';
import { customAxios } from './config';
import axios, { AxiosError } from 'axios';

export const imageupload = async (image: File) => {
  try {
    const formData = new FormData();
    formData.append('images', image);
    const { data } = await customAxios.post('/images/upload', formData);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ msg: string }, unknown>;
      if (axiosError.response) {
        toast.error(axiosError.response.data.msg);
      } else if (axiosError.request) {
        toast.error('No response received');
      } else {
        toast.error('Network error');
      }
    }
    toast.error('Something went wrong');
  }
};
