import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styles: [
  ]
})
export class GraficaBarrasComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };

  @Input() barChartLabels: Label[] = [ 
    // '2015', '2016', '2017', '2018', '2019', '2020', '2021' 
  ];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [];

  ngOnInit(): void {
    if ( this.horizontal ) {
      this.barChartType = 'horizontalBar';
    }
  }

}
