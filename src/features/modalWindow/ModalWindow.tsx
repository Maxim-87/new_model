import React, { ChangeEvent } from 'react';
import s from './ModalWindow.module.scss';

type ModalWindowType = {
  deActivate: () => void;
  setStatus: (value: string) => void;
  status: string;
};

export const ModalWindow = ({ deActivate, setStatus, status }: ModalWindowType) => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div>
      <input
        className={s.modalInput}
        type="text"
        name={`${status}`}
        onChange={changeHandler}
        value={status}
      />
      <button onClick={deActivate}> Сохранить </button>
    </div>
  );
};
