import { useState } from 'react';
import { Title } from 'shared';
import { Form } from 'widgets';

export const App = () => {
  const [timeTargetDate, setTimeTargetDate] = useState<number>(0);

  return (
    <div className='app'>
      <div className='container'>
        <Title>Тестовый Банк</Title>
        <Form timeTargetDate={timeTargetDate} setTimeTargetDate={setTimeTargetDate} />
      </div>
    </div>
  );
};
