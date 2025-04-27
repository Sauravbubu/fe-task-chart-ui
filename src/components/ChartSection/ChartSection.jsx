import { useState } from 'react';
import ChartTabs from './ChartTabs';
import ChartActions from './ChartActions';
import ChartView from './ChartView';
import { getChartData } from '../../services/chartService';
import ErrorBoundary from '../ErrorBoundary';

const ChartSection = ({
  range,
  setRange,
  hoveredPrice,
  setHoveredPrice,
  data,
  priceChange,
  loading,
  isFullScreen, // Use isFullScreen from props
  setIsFullScreen, // Use setIsFullScreen from props
}) => {
  const [activeTab, setActiveTab] = useState('Chart');

  return (
    <div className={`p-8 bg-white rounded-lg shadow-md ${isFullScreen ? 'fixed inset-0 z-50' : 'min-h-[500px] max-w-screen-lg w-full mx-auto'}`}>
      {!isFullScreen && <ChartTabs activeTab={activeTab} onTabChange={setActiveTab} />}

      {activeTab === 'Chart' && (
        <>
          <ChartActions
            selectedRange={range}
            onRangeChange={setRange}
            onToggleFullScreen={() => setIsFullScreen(!isFullScreen)} // Use setIsFullScreen from props
            isFullScreen={isFullScreen}
          />
          <ErrorBoundary>
            <ChartView
              data={data}
              loading={loading}
              setHoveredPrice={setHoveredPrice}
              priceChange={priceChange}
              isFullScreen={isFullScreen}
              onToggleFullScreen={() => setIsFullScreen(!isFullScreen)} // Use setIsFullScreen from props
            />
          </ErrorBoundary>
        </>
      )}

      {activeTab !== 'Chart' && !isFullScreen && (
        <div className="text-gray-400 text-center py-20" style={{ width: '657px', minHeight: '300px' }}>
          <h2 className="text-2xl">{activeTab}</h2>
          <p>Feature Under Development...</p>
        </div>
      )}
    </div>
  );
};

export default ChartSection;
