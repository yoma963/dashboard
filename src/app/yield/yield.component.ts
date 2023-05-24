import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-yield',
  templateUrl: './yield.component.html',
  styleUrls: ['./yield.component.scss']
})
export class YieldComponent {
  chart = new Chart({
    chart: {
      type: 'column',
      height: 300
    },
    title: {
      text: 'Yield of year (2023)'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'in kWh'
      }
    },
    series: [
      {
        showInLegend: false,
        name: "Power",
        type: "column",
        data: [70, 69, 95, 145, 182, 215, null, null, null, null, null, null]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
