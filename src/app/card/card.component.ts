import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMarkSheet } from '../type';

import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private serviceInstance: ServiceService) {}
  markSheet: IMarkSheet[] = [];

  @Input() segmentName = '';
  @Input() condition = [3, 3];
  @Input() arrayType!: IMarkSheet[];

  @Output() data: EventEmitter<IMarkSheet[]> = new EventEmitter();
  async ngOnInit() {
    this.markSheet = await this.serviceInstance.getStudentList();
  }

  update(event: Event, entry: IMarkSheet) {
    for (let element of this.markSheet) {
      if (element.name === entry.name) {
        element.marks = Number((event.target as HTMLInputElement).value);
      }
    }
    console.log(this.markSheet);
    this.data.emit(this.markSheet);
  }
}
