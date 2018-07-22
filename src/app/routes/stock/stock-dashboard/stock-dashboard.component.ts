import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-dashboard',
  templateUrl: './stock-dashboard.component.html',
  styles: []
})
export class StockDashboardComponent implements OnInit {

  cards = [{
    type: 'pie',
    data: {
      title: '升跌百份比',
      palette: 'bright',
      dataSource: [{
        name: '升',
        value: 100
      }, {
        name: '跌',
        value: 200
      }, {
        name: '無升跌',
        value: 300
      }],
      argumentField: 'name',
      valueField: 'value',
    }
  },{
    type: 'pie',
    data: {
      title: '升跌百份比',
      palette: 'bright',
      dataSource: [{
        name: '升',
        value: 100
      }, {
        name: '跌',
        value: 200
      }, {
        name: '無升跌',
        value: 300
      }],
      argumentField: 'name',
      valueField: 'value',
    }
  }];

  constructor() { }

  ngOnInit() {
  }

  customizeLabel(arg) {
    return arg.argumentText + " ( " + arg.percentText + ")";
  }
}
