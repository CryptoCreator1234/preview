<template>
  <highchart
    :options="{
      plotOptions: {
        series: {
          marker: {
            enabled: false,
          },
        },
      },
      annotations: {
        labelOptions: {
          align: 'left',
        },
      },
      chart: {
        renderTo: 'container',
        tyep: 'line',
        showAxes: false,
      },
      xAxis: {
        type: 'datetime',
        visible: true,
        labels: {
          enabled: true,
        },
        lineColor: '#fff',
        gridLineColor: '#fff',
      },
      yAxis: {
        type: 'linear',
        visible: true,
        title: {
          enabled: false,
        },
        labels: {
          enabled: true,
        },
        lineColor: '#fff',
        gridLineColor: '#fff',
      },
      title: {
        align: 'left',
        text: 'Total Value Deposited',
        floating: false,
      },
      series: [
        {
          type: 'areaspline',
          data: [
            29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1,
            95.6, 54.4,
          ],
          pointStart: Date.UTC(2010, 0, 1),
          pointInterval: 3600 * 1000, // one hour
          showInLegend: false,
        },
      ],
      credits: {
        enabled: false,
      },
    }"
  />
</template>
