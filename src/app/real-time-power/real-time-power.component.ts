import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-real-time-power',
  templateUrl: './real-time-power.component.html',
  styleUrls: ['./real-time-power.component.scss']
})
export class RealTimePowerComponent {
  chart = new Chart({
    chart: {
      type: 'area',
      height: 300
    },
    title: {
      text: "Today's performance"
    },
    xAxis: {
      type: 'datetime',
      categories: [
        '00:00',
        '01:30',
        '03:00',
        '04:30',
        '06:00',
        '07:30',
        '09:00',
        '10:30',
        '12:00',
        '13:30',
        '15:00',
        '16:30',
        '18:00',
        '19:30',
        '21:00',
        '22:30',
        '24:00'
      ]
    },
    yAxis: {
      title: {
        text: 'in W'
      }
    },
    series: [
      {
        showInLegend: false,
        name: "Power",
        type: "areaspline",
        data: [0, 0, 700, 690, 950, 1405, 1802, 2105, 2502, 2605, 1802, 2105, null, null, null, null, null]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
