import React, { useEffect, useState } from 'react';

interface ProgressBar2Props {
  title: string;
  targetPercentage: number;
}

const ProgressBar5: React.FC<ProgressBar2Props> = ({ title, targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const animationDuration = 3000;

  useEffect(() => {
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
    <div className="bar">
      <div className="bar-title">{title}</div>
      <div className="bar-inner counted" style={{ width: `${percentage}%` }}>
        <div className="count-text">{percentage}%</div>
      </div>
    </div>
  );
};

export default ProgressBar5;