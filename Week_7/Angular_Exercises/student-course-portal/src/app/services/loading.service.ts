import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private readonly loadingSubject = new BehaviorSubject(false);
  isLoading$ = this.loadingSubject.asObservable();

  setLoading(value: boolean): void {
    this.loadingSubject.next(value);
  }
}
