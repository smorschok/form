import { observer } from "mobx-react-lite";
import React from "react";
import toast from "../store/toast";
interface Form {
  form: {
    firstName: string;
    lastName: string;
  };
}

export const Modal: React.FC<Form> = observer(({ form }) => {
  return (
    <div
      className={toast.openToast ? "modal open" : "modal"}
      onClick={() => toast.removeToast()}
    >
      <div
        className={
          toast.openToast ? "modal__container open" : "modal__container"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => toast.removeToast()}
          className="modal__btn-close"
        >
          ✗
        </button>
        <p>
          Здравствуйте, {form.firstName} {form.lastName}!
        </p>
      </div>
    </div>
  );
});
