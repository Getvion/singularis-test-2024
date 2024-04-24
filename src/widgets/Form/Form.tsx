import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { InputTypeFields } from '../../@types/Enums';
import { CountdownTimer, selectTimerEnd } from '../../features';
import {
  selectCorrectCode,
  setDigitalCode,
  setIsCodeCorrect
} from '../../features/DigitalCode/digitalCodeSlice';
import { Button, Checkbox, Input, Title } from '../../shared';

import { FormStateEnum } from './FormTypes';

import styles from './form.module.scss';

export type FormFields = {
  inputs: { '1': string; '2': string; '3': string; '4': string };
  email: string;
};

interface FormProps extends React.ComponentPropsWithoutRef<'form'> {
  timeTargetDate: number;
  setTimeTargetDate: React.Dispatch<React.SetStateAction<number>>;
}

export const Form = ({ timeTargetDate, setTimeTargetDate }: FormProps) => {
  const [formState, setformState] = useState<FormStateEnum>(FormStateEnum.initial);
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid }
  } = useForm<FormFields>();

  const dispatch = useDispatch();

  const correctDigitalCode = useSelector(selectCorrectCode);

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const { inputs } = data;

    if (!data.email) {
      data.email = '';
    }

    const digitalCodeValue = `${inputs['1']}${inputs['2']}${inputs['3']}${inputs['4']}`;
    dispatch(setDigitalCode(digitalCodeValue));

    if (correctDigitalCode === Number(digitalCodeValue)) {
      setformState(FormStateEnum.submited);
      dispatch(setIsCodeCorrect(true));
    } else {
      setformState(FormStateEnum.rejected);
      dispatch(setIsCodeCorrect(false));
    }
  };

  const onStartButtonClick = () => {
    setformState(FormStateEnum.form);

    const targetTime = Date.now() + 10000;
    setTimeTargetDate(targetTime);
  };

  const isTimerEnd = useSelector(selectTimerEnd);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formState === FormStateEnum.initial && (
        <Button onClick={onStartButtonClick}>Заполнить форму</Button>
      )}
      {formState === FormStateEnum.form && (
        <>
          <div className={styles.timer}>
            <CountdownTimer timeTargetDate={timeTargetDate} />
          </div>
          <div className={styles.digital_code}>
            <Input {...register('inputs.1', { required: true })} type={InputTypeFields.Number} />
            <Input {...register('inputs.2', { required: true })} type={InputTypeFields.Number} />
            <Input {...register('inputs.3', { required: true })} type={InputTypeFields.Number} />
            <Input {...register('inputs.4', { required: true })} type={InputTypeFields.Number} />
          </div>
          <div className={styles.email}>
            <Checkbox
              label='Сохранить чек на почту'
              onChange={() => setIsEmailChecked((prev) => !prev)}
            />
            {isEmailChecked && (
              <Input
                {...register('email', { required: true })}
                placeholder='email@email.com'
                type={InputTypeFields.Email}
              />
            )}
          </div>
          <Button type='submit' disabled={!isDirty || !isValid || isTimerEnd}>
            Отправить
          </Button>
        </>
      )}
      {formState === FormStateEnum.rejected && (
        <>
          <Title>Введен неправильный код!</Title>
          <Button onClick={() => window.location.reload()}>Начать заново</Button>
        </>
      )}
      {formState === FormStateEnum.submited && <Title>Введен правильный код!</Title>}
    </form>
  );
};
