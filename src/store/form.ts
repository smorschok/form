import { makeAutoObservable } from "mobx";
import toast from "./toast";

interface TypeForm {
  firstName: string;
  lastName: string;
}

class Form {
  form: TypeForm = {
    firstName: "",
    lastName: "",
  };
  error: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    this.form = { ...this.form, [e.target.name]: e.target.value };
  }

  resetHandler(): void {
    this.form = { ...this.form, firstName: "", lastName: "" };
  }

  submitHandler(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    e.preventDefault();
    if (!this.form.firstName || !this.form.lastName) {
      this.error = true;
    } else {
      this.error = false;
      toast.addToast();
    }
  }
}

export default new Form();
