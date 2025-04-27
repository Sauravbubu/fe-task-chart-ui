import { useState } from 'react';
import { useChartData } from '../hooks/useChartData';
import ChartSection from '../components/ChartSection/ChartSection';

const Dashboard = () => {
  const [range, setRange] = useState('1w');
  const [hoveredPrice, setHoveredPrice] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false); // Move isFullScreen state here
  const { data, loading } = useChartData(range);

  const latestPrice = data.length > 0 ? data[data.length - 1]?.value ?? 0 : 0;
  const firstPrice = data.length > 0 ? data[0]?.value ?? 0 : 0;
  const currency = 'USD';
  const priceChange = firstPrice !== 0 ? latestPrice - firstPrice : 0;
  const priceChangePercent = firstPrice !== 0 ? (priceChange / firstPrice) * 100 : 0;

  const displayPrice = hoveredPrice ?? latestPrice;

  return (
    <div className="p-8 dashboard-container max-w-screen-lg mx-auto">
      <div className="flex flex-col mb-8">
        <div className="relative text-5xl font-bold">
          {displayPrice.toLocaleString()}
          <span className="absolute top-0 text-sm text-gray-400">{currency}</span>
        </div>
        {hoveredPrice === null && (
          <div
            className={`mt-1 text-lg font-semibold ${
              priceChange >= 0 ? 'text-profit' : 'text-loss'
            }`}
          >
            {priceChange >= 0 ? '▲' : '▼'}
            {priceChange >= 0 ? '+' : ''}
            {priceChange.toLocaleString(undefined, { maximumFractionDigits: 2 })} (
            {priceChangePercent.toFixed(2)}%)
          </div>
        )}
      </div>
      {loading ? (
        <div className="text-gray-500">Loading data...</div>
      ) : (
        <ChartSection
          range={range}
          setRange={setRange}
          hoveredPrice={hoveredPrice}
          setHoveredPrice={setHoveredPrice}
          data={data}
          loading={loading}
          priceChange={priceChange}
          isFullScreen={isFullScreen} // Pass isFullScreen as a prop
          setIsFullScreen={setIsFullScreen} // Pass setIsFullScreen as a prop
        />
      )}
    </div>
  );
};

export default Dashboard;
