import React, { useState } from 'react';
import { RegistrationForm } from './RegistrationForm';
import { CitiesType, newCities } from '../../utils/cities/cities';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../bll/store';
import { UniversitiesType } from '../../api/api';

const cities = newCities.map((c: CitiesType) => c.city);

export const Registration = () => {
  const universities = useSelector<RootStateType, Array<UniversitiesType>>(
    (state) => state.universities.universities
  );

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime);
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const changeHandler = () => {
    setDate(currentDate);
    setTime(currentTime);
  };

  return (
    <div>
      <RegistrationForm
        changeHandler={changeHandler}
        value={value}
        setValue={setValue}
        value1={value1}
        setValue1={setValue1}
        universities={universities}
        arr={cities}
        date={date}
        time={time}
      />
    </div>
  );
};

