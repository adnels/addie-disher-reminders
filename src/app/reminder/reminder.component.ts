import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {IReminder} from "../app.component";
import {DataService} from "../data.service";

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit{

  @Input("reminder") reminder!: IReminder;
  displayReminder!: IReminder;
  //@Output() onDeleteEvent = new EventEmitter<IReminder>();

  constructor(private dataService: DataService) {
    // this.displayReminder = {...this.reminder};
    // console.log(this.displayReminder)
  }

  ngOnInit() {
    this.displayReminder = {...this.reminder};
  }

  onEdit(): void {
    this.displayReminder.isEditing = true
  }

  onSave(): void {
    this.displayReminder.isEditing = false;
    this.dataService.onUpdate(this.displayReminder)
  }

  onDateChange(date: string): void {
    this.displayReminder.date = new Date(date + " 00:00:00");
  }

  onDelete():  void {
   this.dataService.onDelete(this.reminder);
  }

  cancelEdit() {
    this.displayReminder = {...this.reminder}
  }
}
