import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IMarkSheet } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}
  markSheetFromChild!: IMarkSheet[];

  highMarks!: IMarkSheet[];
  averageMarks!: IMarkSheet[];
  lowMarks!: IMarkSheet[];

  eventHandler(event: IMarkSheet[]) {
    this.markSheetFromChild = event;
  }

  async ngOnInit() {
    // this.highMarks = this.markSheetFromChild.filter(
    //   (entry) => entry.marks > 70
    // );
    // this.averageMarks = this.markSheetFromChild.filter(
    //   (entry) => entry.marks >= 50 && entry.marks <= 70
    // );
    // this.lowMarks = this.markSheetFromChild.filter((entry) => entry.marks < 50);
  }
}
