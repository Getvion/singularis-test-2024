export interface IStore {
  digitalCode: IDigitalCode;
  countdownTimer: ICountdownTimer;
}

export interface IDigitalCode {
  digitalCode: string;
  isCodeCorrect: boolean;
}

export interface ICountdownTimer {
  timeToWork: string;
  leftTime: string;
}
