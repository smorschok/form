import React from "react";
import { observer } from "mobx-react-lite";
import { Modal } from "./components/Modal";
import form from "./store/form";

const App: React.FC = observer(() => {
  return (
    <div className="App">
      <div className="title">
        <h1>FORM</h1>
      </div>
      <form className="form">
        <div className="form__container">
          <div className="form__input-container">
            <input
              className="form__input"
              onChange={(e) => form.changeHandler(e)}
              id="firstName"
              type="text"
              name="firstName"
              value={form.form.firstName}
              placeholder={
                form.error && !form.form.firstName
                  ? "Заполните поле!"
                  : undefined
              }
            />
            <label className="form__label" htmlFor="firstName">
              Имя
            </label>
          </div>
          <div className="form__input-container">
            <input
              className="form__input"
              onChange={(e) => form.changeHandler(e)}
              id="lastName"
              type="text"
              name="lastName"
              value={form.form.lastName}
              placeholder={
                form.error && !form.form.lastName
                  ? "Заполните поле!"
                  : undefined
              }
            />
            <label className="form__label" htmlFor="lastName">
              Фамилия
            </label>
          </div>
          <button
            className="form__button"
            onClick={(e) => form.submitHandler(e)}
          >
            Готово
          </button>
        </div>
      </form>
      <Modal form={form.form} />
    </div>
  );
});

export default App;
