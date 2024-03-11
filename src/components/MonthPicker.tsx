import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const MonthPicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>(''); // Change to the appropriate type

  const handleDateChange = (date: any) => {
    setSelectedDate(date.format('MM/YYYY')); // Adjust format as needed
  };

  const dateFormat = 'MM/YYYY'; // Format to display month and year

  return (
    <Box bg={"black"}>
      <Datetime
        value={selectedDate}
        onChange={handleDateChange}
        dateFormat={dateFormat}
        timeFormat={false} // Disable time selection
        isValidDate={(currentDate: any) => {
          // Disable all dates except the first day of each month
          return currentDate.date() === 1;
        }}
      />
    </Box>
  );
};

export default MonthPicker;
