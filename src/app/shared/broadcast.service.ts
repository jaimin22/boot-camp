import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BroadcastService {
    private subject = new Subject<any>();

    emit(data: any) {
        this.subject.next(data);
    }

    clearMessage() {
        this.subject.next();
    }

    on(): Observable<any> {
        return this.subject.asObservable();
    }
}
