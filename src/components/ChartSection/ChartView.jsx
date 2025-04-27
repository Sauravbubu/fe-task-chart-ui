import { ResponsiveLineCanvas } from '@nivo/line';
import React, { use, useEffect, useMemo } from 'react';

const ChartView = React.memo(({ data, loading, setHoveredPrice, isFullScreen, onToggleFullScreen, priceChange }) => {

  useEffect(() => {
    console.log(isFullScreen, 'isFullScreen');
  }, [])
  const formattedData = useMemo(() => [
    {
      id: 'Price',
      data: (data || [])
        .filter(d => d.time && d.value)
        .map(d => ({
          x: new Date(d.time),
          y: d.value,
        })),
    },
  ], [data]);

  const modifiedData = useMemo(() => (data || []).map(d => `${d.time}-${d.value}`).join(','), [data]);

  useEffect(() => {
    console.log('Data updated:', data);
  }, [data]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <p className="text-gray-500">No data available for the selected range.</p>
      </div>
    );
  }

  return (
    <div
      className={`relative ${isFullScreen ? 'fixed inset-0 z-50 bg-white' : ''}`}
      style={{ height: isFullScreen ? '100vh' : 300, position: isFullScreen ? 'absolue' : 'relative', top: isFullScreen ? '8vh' : 'auto', left: isFullScreen ? 0 : 'auto', right: isFullScreen ? 0 : 'auto', bottom: isFullScreen ? 0 : 'auto' }}
    >
      <ResponsiveLineCanvas
        key={modifiedData}
        data={formattedData}
        xScale={{
          type: 'time',
          format: 'native',
          precision: 'second',
        }}
        xFormat="time:%H:%M:%S"
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        curve="linear"
        axisBottom={{
          format: '%H:%M',
          tickValues: 'every 2 minutes',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
        }}
        colors={priceChange >= 0 ? '#4B40EE' : '#FF4D4F'}
        lineWidth={2}
        pointSize={6}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableSlices="x"
        onMouseMove={(point) => {
          if (point?.points?.[0]?.data?.y !== undefined) {
            setHoveredPrice(point.points[0].data.y);
          }
        }}
        enablePoints={false}
        enablePointLabel={false}
        tooltip={({ point }) => (
          <div className="bg-white p-2 rounded shadow text-xs text-black">
            <strong>{point.data.xFormatted}</strong><br />
            Price: {point.data.yFormatted}
          </div>
        )}
      />

    </div>
  );
});

export default ChartView;
