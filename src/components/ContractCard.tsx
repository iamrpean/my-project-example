'use client';

import React from 'react';

interface ContractCardProps {
  title: string;
  contractNumber: string;
  contractDate: string;
  startDate: string;
  endDate: string;
  progress: number;
  progressLabel: string;
  totalRemaining: {
    processed: number;
    total: number;
    remaining: number;
  };
  financialData: {
    cost: string;
    paid: string;
    directExpenses: string;
    grossProfit: string;
    balance: string;
    todayPenalty: string;
    penaltyDays: string;
    maximumPenalty: string;
  };
  className?: string;
}

export default function ContractCard({
  title,
  contractNumber,
  contractDate,
  startDate,
  endDate,
  progress,
  progressLabel,
  totalRemaining,
  financialData,
  className = ''
}: ContractCardProps) {
  const getProgressColor = (progress: number) => {
    if (progress >= 70) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getProgressBgColor = (progress: number) => {
    if (progress >= 70) return 'bg-green-100';
    if (progress >= 40) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-200 dark:bg-zinc-800 dark:border-zinc-700 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-slate-700 text-white p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button className="text-white hover:text-gray-300">
            <i className="fas fa-ellipsis-h"></i>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Contract Info */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Contract</span>
            <span className="text-sm font-medium dark:text-white">{contractNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Start / Completion</span>
            <span className="text-sm font-medium dark:text-white">{startDate} - {endDate}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progressLabel}</span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">{progress}%</span>
          </div>
          <div className={`w-full ${getProgressBgColor(progress)} rounded-full h-3`}>
            <div 
              className={`${getProgressColor(progress)} h-3 rounded-full transition-all duration-300`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Total Remaining Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Total - Processed - Remaining</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {totalRemaining.total} {totalRemaining.processed} {totalRemaining.remaining}
            </span>
          </div>
        </div>

        {/* Financial Information */}
        <div className="space-y-3 border-t border-gray-200 dark:border-zinc-600 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-dollar-sign text-blue-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Cost</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.cost}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-check-circle text-green-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Paid</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.paid}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-receipt text-orange-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Direct Expenses</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.directExpenses}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-chart-line text-purple-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Gross Profit</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.grossProfit}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-wallet text-teal-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Balance</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.balance}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-exclamation-triangle text-red-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Today Penalty</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.todayPenalty}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-calendar-times text-amber-500 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Penalty Days</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.penaltyDays}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-ban text-red-600 text-xs"></i>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Maximum Penalty</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{financialData.maximumPenalty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
