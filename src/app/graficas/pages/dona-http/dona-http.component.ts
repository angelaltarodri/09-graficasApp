import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet, Color } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styleUrls: ['./dona-http.component.scss']
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100, 150]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#0075ED',
        '#00BAF7',
        '#00E0DB',
        '#00F7AD',
        '#00ED63',
      ]
    }
  ]

  constructor( private graficasService: GraficasService ) { }

  ngOnInit(): void {

    // this.graficasService.getUsuariosRedesSociales()
    //   .subscribe( data => {
    //     console.log(data);
    //     const labels = Object.keys( data );
    //     const values = Object.values( data );

    //     this.doughnutChartLabels = labels;
    //     this.doughnutChartData.push( values );

    //   });

    this.graficasService.getUsuariosRedesSocialesDonaData()
      .subscribe( ({ labels, values }) => {

        this.doughnutChartLabels = labels;
        this.doughnutChartData.push( values );

      })

  }

}
