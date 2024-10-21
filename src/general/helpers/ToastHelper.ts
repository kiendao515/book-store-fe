import { toast } from 'react-toastify';

const ToastHelper = {
  // Success toast
  showSuccess: (message: string) => {
    toast.success(message);
  },

  // Error toast
  showError: (error: string) => {
    toast.error(error);
  },
};

export default ToastHelper;
