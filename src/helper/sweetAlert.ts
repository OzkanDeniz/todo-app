import Swal from "sweetalert2";

export enum SweetIcon {
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success",
    INFO = "info",
    QUESTION = "question",
  }

export const notify = (msg:string,icon:SweetIcon) => {
  Swal.fire({
    title: "Todo App!",
    text: msg,
    icon: icon,
    timer:300,
    timerProgressBar:true,
  });
};
