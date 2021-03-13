import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

  constructor() { }

  public lineChartLabels = ['Janvier', 'Février', 'Mars', 'Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Decembre'];
  public lineChartData = [120, 150, 180, 170,160,165,140,150,160,170,168,150];

  public lineChartType = 'line';
  public lineColor=[
    {
      borderColor:'#318CE7',
      backgroundColor:'transparent',
    },
  ]



  ngOnInit() {
  }
}
