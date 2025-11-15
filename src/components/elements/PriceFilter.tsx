import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [price, setPrice] = useState<[number, number]>([0, 100]);
  const handlePriceChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setPrice([value[0], value[1]]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Selected Price Range: $${price[0]} - $${price[1]}`);
  };

  return (
    <div className="range-slider"> 
      <div className="slider-wrapper mb-3">
        <Slider
          range
          min={0}
          max={200}
          value={price}
          onChange={handlePriceChange}
          allowCross={false}
          trackStyle={[{ backgroundColor: '#D9F45F' }]}
          handleStyle={[{ borderColor: '#D9F45F' }, { borderColor: '#D9F45F' }]}
        />
      </div>

      <form className='clearfix' onSubmit={handleSubmit}>
        <label htmlFor="priceFilter">Price:</label>
        <div className='input'>
          <input
            type="text"
            id='priceFilter'
            name='priceFilter'
            className="input"
            value={`$${price[0]} - $${price[1]}`}
            readOnly
          />
        </div>        
        <button type="submit" className="btn btn-primary w-100">
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default PriceFilter;
