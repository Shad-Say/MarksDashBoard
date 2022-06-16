import { Injectable } from '@angular/core';
import { backendMarkSheet } from 'src/backend/mock-backend';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor() {}

  async getStudentList() {
    const list = await backendMarkSheet();
    return list;
  }
}
