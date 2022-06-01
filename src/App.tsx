import React, { useState } from 'react';
import { Calendar } from './components/Calendar/Calendar';

import './static/css/global.css';
import { formatDate } from './utils/helpers/date';

export const App: React.FC = () => {
  const [selectedDate, selectDate] = useState(new Date());

  return (
    <div className='app__container'>
      <div className='date__container'>{formatDate(selectedDate, 'DD MM YYYY')}</div>
      <Calendar selectDate={selectDate} selectedDate={selectedDate} />
    </div>
  );
};

export default App;
