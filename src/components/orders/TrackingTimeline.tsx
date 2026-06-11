import React from 'react';
import { Check } from 'lucide-react';

interface TrackingTimelineProps {
  currentStatus: string;
}

export const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ currentStatus }) => {
  const steps = ['Ordered', 'Packed', 'Shipped', 'Out for Delivery', 'Delivered'];
  const currentIndex = steps.indexOf(currentStatus) === -1 ? 0 : steps.indexOf(currentStatus);
  const isCancelled = currentStatus === 'Cancelled';

  if (isCancelled) {
    return (
      <div className="py-6 px-4 bg-red-50 rounded-xl border border-red-100">
        <h3 className="font-semibold text-red-700">Order Cancelled</h3>
        <p className="text-sm text-red-600 mt-1">This order was cancelled and will not be delivered.</p>
      </div>
    );
  }

  return (
    <div className="py-4 px-2 sm:px-6">
      <div className="relative">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 -translate-y-1/2 rounded-full transition-all duration-500" 
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }} 
        />
        
        <div className="flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index <= currentIndex;
            return (
              <div key={step} className="flex flex-col items-center">
                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 
                  ${isCompleted ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-300 text-gray-300'}`}>
                  <Check size={16} strokeWidth={isCompleted ? 3 : 2} />
                </div>
                <span className={`text-[10px] sm:text-xs font-medium mt-2 text-center max-w-[60px] sm:max-w-none
                  ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                  {step}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
