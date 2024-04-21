import { useCountdown } from '../../hooks/useCountdown';
import { Button } from '../../shared';

import styles from './countdownTImer.module.scss';

interface CountdownTimerProps extends React.ComponentPropsWithoutRef<'div'> {
  targetDate: string | number | Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const [minutes, seconds] = useCountdown(targetDate);

  return minutes + seconds <= 0 ? (
    // добавить кнопку перезапуска
    <div className={styles.expired_notice}>
      <p>Время вышло</p>
      <Button onClick={() => window.location.reload()}>Начать заново</Button>
    </div>
  ) : (
    <div className={styles.countdown_block}>
      <span className={styles.countdown}>{minutes < 10 ? `0${minutes}` : minutes} </span>
      <span>:</span>
      <span className={styles.countdown}>{seconds < 10 ? `0${seconds}` : seconds} </span>
    </div>
  );
};
