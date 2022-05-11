import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SuperSelect from '../../components/select/SuperSelect';
import s from './RegistrationForm.module.scss';

type RegistrationFormType = {
  changeHandler: () => void;
  value: string;
  setValue: (Array: any) => void;
  value1: string;
  setValue1: (Array: any) => void;
  universities: any;
  arr: Array<string>;
  date: string;
  time: string;
};

export const RegistrationForm = ({
  changeHandler,
  value,
  setValue,
  value1,
  setValue1,
  universities,
  arr,
  date,
  time,
}: RegistrationFormType) => {
  const formik = useFormik({
    initialValues: {
      city: value,
      university: value1,
      password: '',
      confirmPassword: '',
      email: '',
      agree: false,
    },
    validationSchema: Yup.object({
      city: Yup.string().required('Выберите город'),
      university: Yup.string().required('Выберите университет'),
      email: Yup.string().email('Неверный E-mail').required('Укажите E-mail'),
      password: Yup.string().min(5, 'Используйте не менее 5 символов').required('Укажите пароль'),
      // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,),
      confirmPassword: Yup.string()
        .required('Укажите пароль')
        .min(5, 'Пароль не совпадает')
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className={s.superSelectBlock}>
            <label className={s.label_superSelectBlock} htmlFor="city">
              Ваш город{' '}
            </label>
            <div className={s.inputWrap}>
              <SuperSelect
                className={s.input_superSelectBlock}
                setValue={setValue}
                arr={arr}
                autoComplete="city"
                {...formik.getFieldProps('city')}
              />
              {formik.touched.city && formik.errors.city ? (
                <label className={s.errorLabel}>{formik.errors.city}</label>
              ) : null}
            </div>
          </div>

          <div className={s.superSelectBlock}>
            <label className={s.label_superSelectBlock} htmlFor="university">
              Ваш университет{' '}
            </label>
            <div className={s.inputWrap}>
              {universities && (
                <SuperSelect
                  className={s.input_superSelectBlock}
                  setValue={setValue1}
                  arr={universities.map((el: any) => el.name)}
                  autoComplete="university"
                  {...formik.getFieldProps('university')}
                />
              )}
              {formik.touched.university && formik.errors.university ? (
                <label className={s.errorLabel}>{formik.errors.university}</label>
              ) : null}
            </div>
          </div>

          <hr className={s.hr} />

          <div className={`${s.superSelectBlock} ${s.passwordBlock}`}>
            <label className={s.label_superSelectBlock} htmlFor="password">
              Пароль
            </label>
            <div className={s.inputWrap}>
              <input
                className={
                  formik.touched.password && formik.errors.password
                    ? `${s.passwordInput} ${s.errorPasswordInput}`
                    : s.passwordInput
                }
                type="password"
                autoComplete="password"
                placeholder={' '}
                {...formik.getFieldProps('password')}
              />
              {formik.touched.password && formik.errors.password ? (
                <label className={s.errorLabel}>{formik.errors.password}</label>
              ) : null}
            </div>
            <label className={s.secondLabel}>
              Ваш новый пароль должен содержать не менее 5 символов.
            </label>
          </div>

          <div
            className={
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? `${s.superSelectBlock} ${s.passwordBlock}`
                : `${s.superSelectBlock} ${s.passwordBlock}`
            }
          >
            <label className={s.label_superSelectBlock} htmlFor="password">
              Пароль ещё раз
            </label>
            <div className={s.inputWrap}>
              <input
                className={
                  formik.touched.confirmPassword && formik.errors.confirmPassword
                    ? `${s.passwordInput} ${s.errorPasswordInput}`
                    : s.passwordInput
                }
                type="password"
                autoComplete="confirmPassword"
                placeholder={' '}
                {...formik.getFieldProps('confirmPassword')}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <label className={s.errorLabel}>{formik.errors.confirmPassword}</label>
              ) : null}
            </div>
            <label className={s.secondLabel}>
              Повторите пароль, пожалуйста это обезопасит вас с нами <br /> на случай ошибки.
            </label>
          </div>

          <hr className={s.hr} />

          <div className={`${s.superSelectBlock} ${s.passwordBlock} ${s.emailBlock}`}>
            <label className={s.label_superSelectBlock} htmlFor="name">
              Электронная почта
            </label>
            <div className={s.inputWrap}>
              <input
                className={
                  formik.touched.email && formik.errors.email
                    ? `${s.passwordInput} ${s.errorPasswordInput}`
                    : s.passwordInput
                }
                type={'email'}
                autoFocus
                autoComplete="email"
                placeholder={' '}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email ? (
                <label className={s.errorLabel}>{formik.errors.email}</label>
              ) : null}
            </div>
            <label className={s.secondLabel}>Можно изменить адрес указанный при регистрации.</label>
          </div>

          <div className={s.agreeBlock}>
            <label className={s.label_agreeBlock} htmlFor="checkbox">
              Я согласен
            </label>
            <input type={'checkbox'} {...formik.getFieldProps('agree')} />
            <label className={s.information_agreeBlock} htmlFor="">
              принимать актуальную информацию на емейл
            </label>
          </div>

          <button type={'submit'} onClick={changeHandler} className={s.button}>
            Изменить
          </button>
          <span className={s.span_agreeBlock}>
            последние изменения {date} в {time}
          </span>
        </form>
      </div>
    </>
  );
};
