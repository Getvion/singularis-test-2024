import { useState } from 'react';

import { InputTypeFields } from '../../../@types/Enums';
import { Input } from '../../../shared';

import styles from './digitalCode.module.scss';

export const DigitalCode = () => {
  const [inputValue, setInputValue] = useState({ 1: '', 2: '', 3: '', 4: '' });

  return (
    <div className={styles.digital_code}>
      <Input
        required
        value={inputValue[1]}
        onChange={(e) => setInputValue((prev) => ({ ...prev, 1: e.target.value }))}
        type={InputTypeFields.Number}
      />
      <Input
        required
        onChange={(e) => setInputValue((prev) => ({ ...prev, 2: e.target.value }))}
        value={inputValue[2]}
        type={InputTypeFields.Number}
      />
      <Input
        required
        onChange={(e) => setInputValue((prev) => ({ ...prev, 3: e.target.value }))}
        value={inputValue[3]}
        type={InputTypeFields.Number}
      />
      <Input
        required
        onChange={(e) => setInputValue((prev) => ({ ...prev, 4: e.target.value }))}
        value={inputValue[4]}
        type={InputTypeFields.Number}
      />
    </div>
  );
};
