"use client";
import { useEffect } from 'react';
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    BarController,
    BarElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

  Chart.register(
    LineController,
    LineElement,
    PointElement,
    BarController,
    BarElement,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend
  );

export default function DashboardRecentSales() {
    useEffect(() => {
        const buyersChartElement = document.getElementById('buyers-chart') as HTMLCanvasElement;
    
        // Global variables to store chart instances
        let buyersChartInstance : Chart | undefined;
    
        if (buyersChartElement) {
          if (buyersChartInstance) {
            buyersChartInstance.destroy(); // Destroy the existing chart if it exists
          }
          buyersChartInstance = new Chart(buyersChartElement, {
            type: 'line',
            data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  backgroundColor: 'rgba(99,179,237,0.4)',
                  borderColor: '#63b3ed',
                  data: [203, 156, 105, 251, 305, 247, 256],
                },
                {
                  backgroundColor: 'rgba(198,198,198,0.4)',
                  borderColor: '#f7fafc',
                  data: [86, 97, 144, 114, 94, 108, 156],
                },
              ],
            },
            options: {
              plugins: {
                legend: {
                  display: false, // Hide legend
                },
              },
              scales: {
                y: { grid: { display: false }, ticks: { display: false } },
                x: { grid: { display: false } },
              },
            },
          });
        }
    
        // Cleanup on component unmount
        return () => {
          if (buyersChartInstance) buyersChartInstance.destroy();
        };
      }, []);
    return (
        <div className="w-full xl:w-1/3 px-3">
        <p className="text-xl font-semibold mb-3">Bán hàng gần đây</p>
        <div className="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
          <canvas id="buyers-chart" width="700" height="500"></canvas>
        </div>
      </div>
    )
}