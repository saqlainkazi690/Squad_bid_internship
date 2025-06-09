import React from 'react';

const GroupStatus = ({ current, required, unlocked }) => (
  <div className="bg-gray-50 rounded-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-2">
        <span className="text-2xl">👥</span>
        <span className="text-lg font-medium text-gray-700">
          {current} / {required} users joined
        </span>
      </div>
      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
        unlocked 
          ? 'bg-green-100 text-green-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        {unlocked ? "✅ Unlocked!" : "🔒 Locked"}
      </div>
    </div>
    
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${(current / required) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default GroupStatus;
