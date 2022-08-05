import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  title = 'reminders'
  count = 0
  dataServiceName: string = ";"

  resetButton() {
    this.count = 0
  }

  onClick() {
    this.count += 1
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

}
