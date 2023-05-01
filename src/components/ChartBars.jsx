import React from 'react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartBars = function () {
  const options = {
    colors: ["#1A56DB", "#FDBA8C"],
    chart: {
      fontFamily: "Inter, sans-serif",
      foreColor: "#374151",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        borderRadius: 3,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
    xaxis: {
      floating: true,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };
  const series = [
    {
      name: "Pontuação",
      color: "#1A56DB",
      data: [
        { x: "01 Feb", y: 170 },
        { x: "02 Feb", y: 180 },
        { x: "03 Feb", y: 164 },
        { x: "04 Feb", y: 145 },
        { x: "05 Feb", y: 174 },
        { x: "06 Feb", y: 170 },
        { x: "07 Feb", y: 155 },
      ],
    },
    {
      name: "Empreendimento",
      color: "#FDBA8C",
      data: [
        { x: "01 Feb", y: 120 },
        { x: "02 Feb", y: 134 },
        { x: "03 Feb", y: 167 },
        { x: "04 Feb", y: 179 },
        { x: "05 Feb", y: 145 },
        { x: "06 Feb", y: 182 },
        { x: "07 Feb", y: 143 },
      ],
    },
  ];

  return  <div className=" text-gray-400 w-full mixed-chart xl:px-8 bg-slate-800 rounded-md">
    {(typeof window !== 'undefined') &&
    <Chart
      options={options}
      series={series}
      type="bar"
      height={305}
    />
    }
</div> 
 
};

export default ChartBars
