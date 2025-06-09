import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ expiresAt }) => {
  const [timeLeft, setTimeLeft] = useState(new Date(expiresAt) - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(new Date(expiresAt) - new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [expiresAt]);

  if (timeLeft <= 0) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
        <p className="text-red-600 font-medium">⏰ Offer expired!</p>
      </div>
    );
  }

  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl">⏰</span>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Time remaining</p>
          <p className="text-xl font-bold text-blue-600">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
