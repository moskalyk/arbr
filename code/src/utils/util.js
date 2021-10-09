import { toast } from 'react-toastify';

export const CheckResponse = (response) => {
    if (response.ret_code !== 0) {
        console.error(response.err_msg);
        toast.error('Something went wrong: ' + response.err_msg);
        return false;
    }

    return true;
};

export const withErrorHandling = (fn) => {
    try {
        fn();
    } catch (err) {
        console.error(err);
        toast.error('Something went wrong: ' + err);
    }
};

export const withErrorHandlingAsync = async (fn) => {
    try {
        await fn();
    } catch (err) {
        console.error(err);
        toast.error('Something went wrong: ' + err);
    }
};
