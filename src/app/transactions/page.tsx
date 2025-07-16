'use client';

import React from 'react';
import { Layout, PageHeader } from '@/components';

export default function TransactionsPage() {
  const breadcrumbs = [
    { label: 'Financial Department', href: '#' },
    { label: 'Transactions', active: true }
  ];

  return (
    <Layout>
      <PageHeader 
        title="Transactions" 
        breadcrumbs={breadcrumbs}
      />
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6">
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
          <h5 className="mb-4 text-16 font-medium text-gray-700 dark:text-gray-100">
            Transaction Management
          </h5>
          <p className="text-gray-600 dark:text-gray-300">
            Manage and view all financial transactions in your system.
          </p>
          
          <div className="mt-6 space-y-4">
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Recent Transactions
              </h6>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Here you can view and manage recent financial transactions.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Transaction Categories
              </h6>
              <ul className="text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                <li>Income transactions</li>
                <li>Expense transactions</li>
                <li>Transfer transactions</li>
                <li>Pending transactions</li>
                <li>Completed transactions</li>
              </ul>
            </div>
            
            <div className="p-4 border rounded-lg border-gray-200 dark:border-zinc-600">
              <h6 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                Quick Actions
              </h6>
              <div className="flex flex-wrap gap-2 mt-3">
                <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                  Add Transaction
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 dark:bg-zinc-700 dark:text-gray-300 dark:hover:bg-zinc-600">
                  Export Data
                </button>
                <button className="px-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-1 dark:bg-zinc-700 dark:text-gray-300 dark:hover:bg-zinc-600">
                  Filter Transactions
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transaction Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
                <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100">$12,450.00</h6>
              </div>
              <div className="p-3 bg-green-100 rounded-full dark:bg-green-500/10">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
                <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100">$8,320.00</h6>
              </div>
              <div className="p-3 bg-red-100 rounded-full dark:bg-red-500/10">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Net Balance</p>
                <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100">$4,130.00</h6>
              </div>
              <div className="p-3 bg-blue-100 rounded-full dark:bg-blue-500/10">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pending</p>
                <h6 className="text-lg font-semibold text-gray-800 dark:text-gray-100">15</h6>
              </div>
              <div className="p-3 bg-yellow-100 rounded-full dark:bg-yellow-500/10">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
