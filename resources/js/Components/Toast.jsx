import React from "react";
import {toast} from "react-toastify";

const Toast = ({ flash }) => {

    if(flash.error_message){
        toast.error(flash.error_message)
    }
    if(flash.success_message){
        toast.success(flash.success_message)
    }
    if(flash.warning_message){
        toast.warning(flash.warning_message)
    }

}

export default Toast;
