import React, { useEffect, useState } from 'react';
import s from './MainPage.module.scss';
import { ModalWindow } from '../modalWindow/ModalWindow';
import { getUniversitiesTC } from '../../bll/universityReducer';
import { useDispatch } from 'react-redux';
import { Registration } from '../Registration/Registration';

export const MainPage = () => {
  const dispatch = useDispatch();

  const [modalWindow, setModalWindow] = useState(false);
  const [status, setStatus] = useState('Тестовое задание');

  useEffect(() => {
    // @ts-ignore
    dispatch(getUniversitiesTC());
  }, []);

  const activateModalHandler = () => {
    setModalWindow(true);
  };

  const deActiveModalHandler = () => {
    setModalWindow(false);
  };

  return (
    <div className={s.mainPage}>
      <div className={s.header_mainPage}>
        <strong className={s.titleHeader_MainPage}>
          Здравствуйте, <span>Человек №3596941</span>
        </strong>
        <button className={s.button_mainPage} onClick={activateModalHandler}>
          Сменить статус
        </button>
      </div>
      <div className={s.modalWindow}>
        {modalWindow ? (
          <ModalWindow deActivate={deActiveModalHandler} setStatus={setStatus} status={status} />
        ) : (
          <span>{status}</span>
        )}
      </div>
      <Registration />
    </div>
  );
};
