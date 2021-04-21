import { makeAutoObservable } from "mobx";
import form from "./form";

class Toast {
  openToast: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  addToast(): void {
    this.openToast = true;
  }
  removeToast(): void {
    this.openToast = false;
    form.resetHandler()
  }
}
export default new Toast();
