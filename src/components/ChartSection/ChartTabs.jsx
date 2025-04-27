import React from 'react';

const tabs = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

const ChartTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex gap-6 border-b mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative pb-2 text-base font-semibold transition-colors ${
              isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
            {isActive && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full transition-all"
                style={{ backgroundColor: '#007BFF' }} // Add your desired underline color here
              ></span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default ChartTabs;
