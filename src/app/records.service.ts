import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class RecordsService {
  //displaying data by creating three arrays
  info1: string[] = ['Harshita Vishwakarma', '00130', 'harshita@'];
  info2: string[] = ['Harsh Gupta', '00140', 'harsh@'];
  info3: string[] = ['Ram Gupta', '00131', 'ram@'];

  getinfo1(): string[] {
    return this.info1;
  }
  getinfo2(): string[] {
    return this.info2;
  }
  getinfo3(): string[] {
    return this.info3;
  }

  constructor() {}
}
