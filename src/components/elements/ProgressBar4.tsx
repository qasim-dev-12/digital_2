import React, { useEffect, useState } from 'react';

const ProgressBar4 = ({ targetPercentage = 0 }) => {
  const [percentage, setPercentage] = useState(0);
  const animationDuration = 3000;

  useEffect(() => {
    if (typeof targetPercentage !== 'number' || isNaN(targetPercentage)) return;

    const increment = targetPercentage / (animationDuration / 10);
    let currentPercentage = 0;

    const timer = setInterval(() => {
      currentPercentage += increment;
      const next = Math.min(currentPercentage, targetPercentage);
      setPercentage(Math.floor(next));

      if (next >= targetPercentage) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [targetPercentage]);

  return (
    <div
      className="skill-bar"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={targetPercentage}
    >
      <div className="bar-inner">
        <div className="bar progress-line" style={{ width: `${percentage}%` }}>
          <div className="skill-percentage">
            <div className="count-box">
              <span className="count-text">{percentage}</span>%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar4;