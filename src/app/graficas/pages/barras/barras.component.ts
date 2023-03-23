import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent {
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Leyton', borderColor: '#ED5F76', backgroundColor: 'transparent', hoverBackgroundColor: 'white', hoverBorderColor:'red' , hoverBorderWidth: 1 },
    { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Gabriel', borderColor: '#F763C4', backgroundColor: 'transparent', hoverBackgroundColor: 'white', hoverBorderColor:'red', hoverBorderWidth: 1 },
    { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Gonzalo', borderColor: '#D665E0', backgroundColor: 'transparent', hoverBackgroundColor: 'white', hoverBorderColor:'red', hoverBorderWidth: 1 },
    { data: [ 18, 28, 40, 69, 16, 82, 50 ], label: 'Angel', borderColor: '#D665E0', backgroundColor: 'transparent', hoverBackgroundColor: 'white', hoverBorderColor:'red', hoverBorderWidth: 1 },
    { data: [ 56, 91, 81, 11, 61, 35, 42 ], label: 'General', backgroundColor: 'orange', type: 'bar'},
  ];

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData[1].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData[2].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];

    this.barChartData[3].data = [
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
      Math.round( Math.random() * 100 ),
    ];
  }

}
