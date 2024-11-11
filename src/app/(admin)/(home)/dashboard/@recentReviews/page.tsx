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

export default function DashboardRecentReviews() {
    useEffect(() => {
        const reviewsChartElement = document.getElementById('reviews-chart') as HTMLCanvasElement;
    
        // Global variables to store chart instances
        let reviewsChartInstance : Chart | undefined;
    
        if (reviewsChartElement) {
          if (reviewsChartInstance) {
            reviewsChartInstance.destroy(); // Destroy the existing chart if it exists
          }
          reviewsChartInstance = new Chart(reviewsChartElement, {
            type: 'bar',
            data: {
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  backgroundColor: 'rgba(99,179,237,0.4)',
                  borderColor: '#63b3ed',
                  data: [203, 156, 99, 251, 305, 247, 256],
                },
              ],
            },
            options: {
              plugins: {
                legend: {
                  display: false,
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
          if (reviewsChartInstance) reviewsChartInstance.destroy();
        };
      }, []);
    return(
        <div className="w-full xl:w-1/3 px-3">
          <p className="text-xl font-semibold mb-3">Đánh giá gần đây</p>
          <div className="w-full bg-white border rounded-lg p-4 mb-8 xl:mb-0">
            <canvas id="reviews-chart" width="700" height="500"></canvas>
          </div>
        </div>
    )
}