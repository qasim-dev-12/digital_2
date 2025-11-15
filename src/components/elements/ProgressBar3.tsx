import React, { useEffect, useState } from 'react';

const ProgressBar3 = ({ title = 'Progress', targetPercentage = 0 }) => {
  const [percentage, setPercentage] = useState(0);
  const animationDuration = 3000;

  useEffect(() => {
    if (typeof targetPercentage !== 'number' || isNaN(targetPercentage)) return;

    const increment = targetPercentage / (animationDuration / 10);
    let currentPercentage = 0;

    const interval = setInterval(() => {
      currentPercentage += increment;
      const next = Math.min(currentPercentage, targetPercentage);
      setPercentage(Math.floor(next));

      if (next >= targetPercentage) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [targetPercentage]);

  return (
    <div className="progress-area mt-30">
      <div className="progress__title">
        <h5>{title}</h5>
        <span className="progress-count">{percentage}%</span>
      </div>
      <div className="progress">
        <div
            className="progress-bar wow slideInLeft"
            data-wow-duration="80s"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={!isNaN(percentage) ? percentage : 0}
            aria-label={`Progress: ${percentage}%`}
            ></div>
      </div>
    </div>
  );
};

export default ProgressBar3;