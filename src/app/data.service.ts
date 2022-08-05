import { Injectable } from '@angular/core';
import {v4 as uuidv4} from "uuid";
import {IReminder} from "./app.component";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  reminderList: Array<IReminder> = []
  reminderList$ = new Subject<Array<IReminder>>();

  createMemo() {
    this.reminderList.push({
      id: uuidv4(),
      date: new Date(),
      text: "",
      isEditing: true,
      isFinished: false
    })

    this.reminderList$.next(this.reminderList);
  }
  onDelete(reminderToDelete: any) {
    this.reminderList = this.reminderList.filter(
      (reminder) => {return reminder.id !== reminderToDelete.id}
    )
  }
  onUpdate(reminderToUpdate: IReminder) {
    this.reminderList = this.reminderList.map(
      (reminder) => {
      if (reminder.id === reminderToUpdate.id) {
        return reminderToUpdate;

      }
      return reminder;
    })
}
}
