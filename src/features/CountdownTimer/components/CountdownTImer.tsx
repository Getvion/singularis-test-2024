import Countdown from 'react-countdown';
import { useDispatch } from 'react-redux';
import { Button } from 'shared';

import { setTimerEnd } from '../countdownTImerSlice';

import styles from './countdownTImer.module.scss';

interface CountdownTimerProps extends React.ComponentPropsWithoutRef<'div'> {
  timeTargetDate: number;
}

interface ICountdownTimer {
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const CountdownTimer = ({ timeTargetDate }: CountdownTimerProps) => {
  const dispatch = useDispatch();

  const onTimerComplete = () => {};

  const renderer = ({ completed, minutes, seconds }: ICountdownTimer) => {
    if (completed) {
      dispatch(setTimerEnd(true));

      return (
        <div className={styles.expired_notice}>
          <p>Время вышло</p>
          <Button onClick={() => window.location.reload()}>Начать заново</Button>
        </div>
      );
    }

    return (
      <div className={styles.countdown_block}>
        <span className={styles.countdown}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span className={styles.countdown}>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
    );
  };

  return (
    <div>
      <Countdown date={timeTargetDate} renderer={renderer} onComplete={() => onTimerComplete()} />
    </div>
  );
};
