'use client'

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export function LineChart() {
  const options = {
    chart: {
      id: 'sales-chart',
      toolbar: { show: false }
    },
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']
    },
    colors: ['#6366f1']
  };

  const series = [{
    name: 'Ventas',
    data: [30, 40, 35, 50, 49, 60]
  }];

  return <ApexChart type="line" options={options} series={series} height={300} />;
}

export function BarChart() {
  // Configuración similar para gráfico de barras
}