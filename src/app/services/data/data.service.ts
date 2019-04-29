import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DataItem } from '../../model';

@Injectable()
export class DataService {

  private items: Map<number, DataItem> = new Map<number, DataItem>();

  listItems(): Observable<DataItem[]> {
    let values = Array.from(this.items.values());
    return of(values).pipe(delay(200));
  }

  getItem(id: number): Observable<DataItem> {
    return of(this.items.get(id)).pipe(delay(200));
  }

  createItem(item: DataItem): Observable<DataItem> {
    this.items.set(item.id, item);
    return of(item).pipe(delay(200));
  }

  deleteItem(item: DataItem): Observable<void> {
    this.items.delete(item.id);
    return of(null);
  }

}
