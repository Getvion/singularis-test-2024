export interface IStore {
  digitalCode: IDigitalCode;
  countdownTimer: ICountdownTimer;
}

export interface IDigitalCode {
  digitalCode: number;
  isCodeCorrect: boolean;
  correctCode: number;
}

export interface ICountdownTimer {
  isTimerEnd: boolean;
}
