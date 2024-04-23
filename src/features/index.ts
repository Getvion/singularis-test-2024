// components
export { CountdownTimer } from './CountdownTimer/components/CountdownTImer';
export { DigitalCode } from './DigitalCode/components/DigitalCode';

// reducers
export { countdownTimerReducer as countdownTimer } from './CountdownTimer/countdownTImerSlice';
export { digitalCodeReducer as digitalCode } from './DigitalCode/digitalCodeSlice';

// actions
export { selectLeftTime, selectTimeToWork } from './CountdownTimer/countdownTImerSlice';
export { selectInputValues, selectIsCodeCorrect } from './DigitalCode/digitalCodeSlice';
