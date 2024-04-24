// components
export { CountdownTimer } from './CountdownTimer/components/CountdownTImer';
export { DigitalCode } from './DigitalCode/components/DigitalCode';

// reducers
export { countdownTimerReducer as countdownTimer } from './CountdownTimer/countdownTImerSlice';
export { digitalCodeReducer as digitalCode } from './DigitalCode/digitalCodeSlice';

// selectors
export { selectTimerEnd } from './CountdownTimer/countdownTImerSlice';
export {
  selectCorrectCode,
  selectInputValues,
  selectIsCodeCorrect
} from './DigitalCode/digitalCodeSlice';
