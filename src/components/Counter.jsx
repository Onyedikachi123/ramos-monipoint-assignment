/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';

const Counter = ({  start, end, duration, isPercentage = false }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (start < end) {
      let currentCount = start;
      const increment = end / (duration / 1000 * 60);

      const timer = setInterval(() => {
        currentCount += increment;
        setCount(Math.min(Math.ceil(currentCount), end));

        if (currentCount >= end) {
          clearInterval(timer);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [start, end, duration]);

  const formatCount = () => {
    const value = count < 1000 ? count : `${Math.round(count / 1000)}`;
    return isPercentage ? `${value}%` : value;
  };

  return <>{formatCount()}</>;
};

export default Counter;
