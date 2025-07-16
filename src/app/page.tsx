'use client';

import React from 'react';
import { Layout, PageHeader, TabsInPills, DataTable, ContractCard } from '@/components';
import { User, Edit, File, FileText } from 'react-feather';

export default function HomePage() {
  const breadcrumbs = [
    { label: 'Dashboard', active: true }
  ];

  // Dummy data for contract cards
  const contractsData = [
    {
      title: "PT Alex Estate Production",
      contractNumber: "001-06/IV/MBI-2025",
      contractDate: "25.01.2024 - 25.01.2025",
      startDate: "25.01.2024",
      endDate: "25.01.2025",
      progress: 28,
      progressLabel: "EAST",
      totalRemaining: {
        processed: 365,
        total: 365,
        remaining: 150
      },
      financialData: {
        cost: "5,000,000,000 ₽",
        paid: "140,000,000 ₽",
        directExpenses: "3,500,000,000 ₽",
        grossProfit: "1,500,000,000 ₽",
        balance: "-1,360,000,000 ₽",
        todayPenalty: "0 ₽",
        penaltyDays: "90,000,000 ₽",
        maximumPenalty: "500,000,000 ₽"
      }
    },
    {
      title: "PT Amadeus Rock Reality",
      contractNumber: "002-08/IV/MBI-2024",
      contractDate: "25.03.2024 - 25.08.2024",
      startDate: "25.03.2024",
      endDate: "25.08.2024",
      progress: 70,
      progressLabel: "EAST",
      totalRemaining: {
        processed: 180,
        total: 180,
        remaining: 100
      },
      financialData: {
        cost: "278,000,000 ₽",
        paid: "180,000,000 ₽",
        directExpenses: "180,000,000 ₽",
        grossProfit: "98,000,000 ₽",
        balance: "98,000,000 ₽",
        todayPenalty: "0 ₽",
        penaltyDays: "270,000 ₽",
        maximumPenalty: "27,800,000 ₽"
      }
    },
    {
      title: "PT Global Tech Solutions",
      contractNumber: "003-12/V/MBI-2024",
      contractDate: "15.05.2024 - 15.12.2024",
      startDate: "15.05.2024",
      endDate: "15.12.2024",
      progress: 45,
      progressLabel: "WEST",
      totalRemaining: {
        processed: 210,
        total: 210,
        remaining: 125
      },
      financialData: {
        cost: "850,000,000 ₽",
        paid: "320,000,000 ₽",
        directExpenses: "450,000,000 ₽",
        grossProfit: "400,000,000 ₽",
        balance: "80,000,000 ₽",
        todayPenalty: "0 ₽",
        penaltyDays: "150,000 ₽",
        maximumPenalty: "85,000,000 ₽"
      }
    },
    {
      title: "PT Innovation Hub Corp",
      contractNumber: "004-03/VI/MBI-2025",
      contractDate: "10.02.2024 - 10.09.2024",
      startDate: "10.02.2024",
      endDate: "10.09.2024",
      progress: 85,
      progressLabel: "NORTH",
      totalRemaining: {
        processed: 240,
        total: 240,
        remaining: 45
      },
      financialData: {
        cost: "1,200,000,000 ₽",
        paid: "950,000,000 ₽",
        directExpenses: "800,000,000 ₽",
        grossProfit: "400,000,000 ₽",
        balance: "150,000,000 ₽",
        todayPenalty: "0 ₽",
        penaltyDays: "75,000 ₽",
        maximumPenalty: "120,000,000 ₽"
      }
    }
  ];

  // Dummy data for transactions table
  const transactionsData = [
    {
      contractNumber: 'CTR-2024-001',
      contractAmount: '$250,000',
      projectName: 'E-commerce Platform Development',
      paid: '$150,000',
      employee: 'John Smith',
      purpose: 'Development Services',
      sender: 'Tech Corp Ltd',
      recipient: 'Digital Solutions Inc',
      paymentAmount: '$50,000',
      paymentDate: '2024-01-15'
    },
    {
      contractNumber: 'CTR-2024-002',
      contractAmount: '$180,000',
      projectName: 'Mobile App Development',
      paid: '$90,000',
      employee: 'Sarah Johnson',
      purpose: 'Mobile Development',
      sender: 'StartUp Ventures',
      recipient: 'App Makers LLC',
      paymentAmount: '$30,000',
      paymentDate: '2024-01-18'
    },
    {
      contractNumber: 'CTR-2024-003',
      contractAmount: '$320,000',
      projectName: 'Cloud Infrastructure Setup',
      paid: '$200,000',
      employee: 'Michael Chen',
      purpose: 'Infrastructure Services',
      sender: 'Enterprise Corp',
      recipient: 'Cloud Solutions Pro',
      paymentAmount: '$80,000',
      paymentDate: '2024-01-20'
    },
    {
      contractNumber: 'CTR-2024-004',
      contractAmount: '$450,000',
      projectName: 'AI Analytics Platform',
      paid: '$300,000',
      employee: 'Emma Davis',
      purpose: 'AI Development',
      sender: 'Data Analytics Ltd',
      recipient: 'AI Innovations Inc',
      paymentAmount: '$100,000',
      paymentDate: '2024-01-22'
    },
    {
      contractNumber: 'CTR-2024-005',
      contractAmount: '$275,000',
      projectName: 'CRM System Integration',
      paid: '$165,000',
      employee: 'Robert Wilson',
      purpose: 'System Integration',
      sender: 'Business Solutions Corp',
      recipient: 'Integration Experts LLC',
      paymentAmount: '$55,000',
      paymentDate: '2024-01-25'
    }
  ];

  // Columns configuration for DataTable
  const transactionColumns = [
    {
      key: 'contractNumber',
      title: 'Contract Number'
    },
    {
      key: 'contractAmount',
      title: 'Contract Amount'
    },
    {
      key: 'projectName',
      title: 'Project Name'
    },
    {
      key: 'paid',
      title: 'Paid'
    },
    {
      key: 'employee',
      title: 'Employee'
    },
    {
      key: 'purpose',
      title: 'Purpose'
    },
    {
      key: 'sender',
      title: 'Sender'
    },
    {
      key: 'recipient',
      title: 'Recipient'
    },
    {
      key: 'paymentAmount',
      title: 'Payment Amount'
    },
    {
      key: 'paymentDate',
      title: 'Payment Date'
    },
    {
      key: 'documents',
      title: 'Documents',
      render: () => (
        <div className="flex items-center space-x-2">
          <button className="p-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
            <FileText className="w-4 h-4" />
          </button>
        </div>
      )
    },
    {
      key: 'settings',
      title: 'Settings',
      render: () => (
        <div className="flex items-center space-x-2">
          <button className="p-2 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200">
            <User className="w-4 h-4" />
          </button>
          <button className="p-2 text-yellow-600 hover:text-yellow-800 dark:text-yellow-400 dark:hover:text-yellow-200">
            <Edit className="w-4 h-4" />
          </button>
          <button className="p-2 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200">
            <File className="w-4 h-4" />
          </button>
        </div>
      )
    }
  ];

  const pillsTabsData = [
    {
      id: 'expenses',
      label: 'Expenses',
      content: 'This is the Expenses section'
    },
    {
      id: 'replenishment',
      label: 'Replenishment',
      content: (
        <div className="space-y-6">
          {/* Financial Metrics Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Contracts */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900">
                    <i className="fas fa-file-contract text-blue-600 dark:text-blue-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Contracts Amount</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$52,780,000</p>
                </div>
              </div>
            </div>

            {/* Client Balance */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center dark:bg-green-900">
                    <i className="fas fa-users text-green-600 dark:text-green-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Client Balance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$15,980,000</p>
                </div>
              </div>
            </div>

            {/* Balance Difference */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900">
                    <i className="fas fa-balance-scale text-purple-600 dark:text-purple-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Balance Difference</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$0</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Metrics Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Paid Contracts */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center dark:bg-orange-900">
                    <i className="fas fa-check-circle text-orange-600 dark:text-orange-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Paid Contracts</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$3,200,000</p>
                </div>
              </div>
            </div>

            {/* Company Balance */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center dark:bg-indigo-900">
                    <i className="fas fa-building text-indigo-600 dark:text-indigo-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Company Balance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$52,780,000</p>
                </div>
              </div>
            </div>

            {/* Execution Volume */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center dark:bg-teal-900">
                    <i className="fas fa-chart-bar text-teal-600 dark:text-teal-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Execution Volume</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$13,195,000</p>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded dark:bg-green-900 dark:text-green-200">25%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Metrics Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Direct Expenses */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center dark:bg-red-900">
                    <i className="fas fa-arrow-down text-red-600 dark:text-red-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Direct Expenses</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$36,800,000</p>
                </div>
              </div>
            </div>

            {/* Company & Client Balance */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center dark:bg-yellow-900">
                    <i className="fas fa-handshake text-yellow-600 dark:text-yellow-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Company & Client Balance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$68,760,000</p>
                </div>
              </div>
            </div>

            {/* Selected Rows Amount */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center dark:bg-pink-900">
                    <i className="fas fa-chart-line text-pink-600 dark:text-pink-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Selected Rows Amount</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$75,600,000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Financial Metrics Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Currency Profit */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center dark:bg-emerald-900">
                    <i className="fas fa-coins text-emerald-600 dark:text-emerald-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Currency Profit</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$15,980,000</p>
                </div>
              </div>
            </div>

            {/* Bank Balance */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center dark:bg-cyan-900">
                    <i className="fas fa-university text-cyan-600 dark:text-cyan-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bank Balance</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$68,700,000</p>
                </div>
              </div>
            </div>

            {/* Filter Selected Amount */}
            <div className="bg-white rounded-lg shadow p-6 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center dark:bg-violet-900">
                    <i className="fas fa-filter text-violet-600 dark:text-violet-400"></i>
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Filter Selected Amount</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">$126,000,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'create-project',
      label: 'Create a project',
      content: 'This is the Create a project section'
    }
  ];

  const dataTranscations = [
    {
      id: 'all-transactions',
      label: 'All Transactions',
      content: (
        <div className="space-y-4">
          <DataTable 
            columns={transactionColumns}
            data={transactionsData}
            searchable={true}
            pageSize={10}
          />
        </div>
      )
    },
    {
      id: 'received',
      label: 'Received',
      content: 'This is the Received section'
    },
    {
      id: 'waiting',
      label: 'Waiting',
      content: 'This is the waiting section'
    },
    {
      id: 'create-transaction',
      label: 'Create transaction',
      content: 'This is the Create transaction section'
    },
  ]

  return (
    <Layout>
      <PageHeader 
        title="Dashboard" 
        breadcrumbs={breadcrumbs}
      />
      
      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6">

        {/* Contract Cards Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Active Contracts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
            {contractsData.map((contract, index) => (
              <ContractCard
                key={index}
                title={contract.title}
                contractNumber={contract.contractNumber}
                contractDate={contract.contractDate}
                startDate={contract.startDate}
                endDate={contract.endDate}
                progress={contract.progress}
                progressLabel={contract.progressLabel}
                totalRemaining={contract.totalRemaining}
                financialData={contract.financialData}
              />
            ))}
          </div>
        </div>

        {/* Tabs in Pills Component */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
          <TabsInPills 
            tabs={pillsTabsData}
            defaultActiveTab="replenishment"
          />
        </div>

        {/* Tabs in Pills Component */}
        <div className="p-6 bg-white rounded-lg shadow dark:bg-zinc-800">
          <TabsInPills 
            tabs={dataTranscations}
            defaultActiveTab="all-transactions"
          />
        </div>

      </div>
    </Layout>
  );
}
