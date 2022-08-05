import {Component, OnDestroy} from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataService} from "./data.service";
import {Subscription} from "rxjs";

export interface IReminder {
  id: string;
  date: Date;
  text: string;
  isEditing: boolean;
  isFinished: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

  title = "reminders";
  searchText: string = "";
  reminderList: Array<any> = []
  displayList: Array<any> = []
  reminderListSub: Subscription

  constructor(private datePipe: DatePipe, private dataService: DataService) {
    this.reminderListSub = dataService.reminderList$.subscribe(
      (newList) => {
      this.displayList=newList;
    })
  }

  ngOnDestroy() {
    this.reminderListSub.unsubscribe();
  }

  createMemo() {
   this.dataService.createMemo()
    this.displayList = [...this.dataService.reminderList];
  }

  buildDisplayList() {
    this.displayList = this.reminderList.filter(
      (reminder) => {
        const dateString = this.datePipe.transform(reminder.date);
        return reminder.text.includes(this.searchText) || dateString?.toUpperCase().includes(this.searchText.toUpperCase())
      }
    )
  }

  onSearch(searchText: string) {
    this.searchText = searchText;
    this.buildDisplayList();

  }

}

