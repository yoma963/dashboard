import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-yield-this-month',
  templateUrl: './yield-this-month.component.html',
  styleUrls: ['./yield-this-month.component.scss']
})
export class YieldThisMonthComponent {
  chart = new Chart({
    chart: {
      type: 'column',
      height: 300
    },
    title: {
      text: "Monthly production"
    },
    xAxis: {
      type: 'datetime',
      categories: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31'
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
        data: [45, 60, 75, 43, 50, 50, 62, 67, 60, 35, 25, 43, 47, 43, 50, 50, 62, 67, 60, 35, null, null, null, null, null, null, null, null, null, null, null]
      }
    ],
    credits: {
      enabled: false
    }
  })
}
