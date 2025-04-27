// Mock API service for chart data (testing ke liye || for testing purposes)
export const fetchChartData = async () => {
  try {
    const response = await fetch('/api/chart-data'); // endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch chart data. Please check the API endpoint.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

export const createChartData = async (chartData) => {
  try {
    const response = await fetch('/api/chart-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chartData),
    });
    if (!response.ok) {
      throw new Error('Failed to create chart data. Please check the API endpoint.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creating chart data:', error);
    throw error;
  }
};

/**
 * Get humanized chart data for different time ranges.
 * This function simulates data for testing purposes with profits and losses.
 */
export const getChartData = async (range) => {
  try {
    const data = {
      '1d': [
        { time: '2025-04-26T00:00:00Z', value: 120 },
        { time: '2025-04-26T02:00:00Z', value: 125 },
        { time: '2025-04-26T04:00:00Z', value: 122 },
        { time: '2025-04-26T06:00:00Z', value: 130 },
        { time: '2025-04-26T08:00:00Z', value: 128 },
        { time: '2025-04-26T10:00:00Z', value: 135 },
        { time: '2025-04-26T12:00:00Z', value: 138 },
        { time: '2025-04-26T14:00:00Z', value: 132 },
        { time: '2025-04-26T16:00:00Z', value: 137 },
        { time: '2025-04-26T18:00:00Z', value: 140 },
      ],
      '3d': [
        { time: '2025-04-24T00:00:00Z', value: 118 },
        { time: '2025-04-25T00:00:00Z', value: 122 },
        { time: '2025-04-26T00:00:00Z', value: 119 },
        { time: '2025-04-27T00:00:00Z', value: 124 },
      ],
      '1w': [
        { time: '2025-04-20T00:00:00Z', value: 130 },
        { time: '2025-04-21T00:00:00Z', value: 127 },
        { time: '2025-04-22T00:00:00Z', value: 125 },
        { time: '2025-04-23T00:00:00Z', value: 123 },
        { time: '2025-04-24T00:00:00Z', value: 120 },
        { time: '2025-04-25T00:00:00Z', value: 118 },
        { time: '2025-04-26T00:00:00Z', value: 115 },
      ],
      '1m': [
        { time: '2025-03-26T00:00:00Z', value: 110 },
        { time: '2025-04-01T00:00:00Z', value: 112 },
        { time: '2025-04-10T00:00:00Z', value: 116 },
        { time: '2025-04-15T00:00:00Z', value: 118 },
        { time: '2025-04-20T00:00:00Z', value: 120 },
        { time: '2025-04-25T00:00:00Z', value: 122 },
      ],
      '6m': [
        { time: '2024-10-26T00:00:00Z', value: 95 },
        { time: '2024-12-01T00:00:00Z', value: 100 },
        { time: '2025-01-10T00:00:00Z', value: 105 },
        { time: '2025-02-15T00:00:00Z', value: 110 },
        { time: '2025-03-20T00:00:00Z', value: 115 },
        { time: '2025-04-25T00:00:00Z', value: 120 },
      ],
      '1y': [
        { time: '2024-04-26T00:00:00Z', value: 85 },
        { time: '2024-06-26T00:00:00Z', value: 90 },
        { time: '2024-08-26T00:00:00Z', value: 95 },
        { time: '2024-10-26T00:00:00Z', value: 100 },
        { time: '2024-12-26T00:00:00Z', value: 105 },
        { time: '2025-02-26T00:00:00Z', value: 110 },
        { time: '2025-04-26T00:00:00Z', value: 120 },
      ],
      'max': [
        { time: '2020-01-01T00:00:00Z', value: 50 },
        { time: '2021-01-01T00:00:00Z', value: 65 },
        { time: '2022-01-01T00:00:00Z', value: 80 },
        { time: '2023-01-01T00:00:00Z', value: 95 },
        { time: '2024-01-01T00:00:00Z', value: 110 },
        { time: '2025-04-26T00:00:00Z', value: 120 },
      ],
    };

    console.log('Returning data for range:', range, data[range]);
    return data[range] || [];
  } catch (error) {
    console.error('Error in getChartData:', error);
    throw error;
  }
};
