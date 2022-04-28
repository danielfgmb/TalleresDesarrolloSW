import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SeriesService } from './series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  public  series: Array<Serie> = [];
  constructor(private seriesService: SeriesService) {
  }

  getSeries() {
    this.seriesService.getSeries().subscribe(series => {
      this.series = series;
    });
    }

  getAver() {
    let i=0, aver=0;
    for (i=0;i<this.series.length;i++){
      aver+=this.series[i].seasons;
    }
    aver=aver/i;
    return aver;
  }

  ngOnInit() {
    this.getSeries();
  }

}
