import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'monthFormat' })
export class MonthFormat implements PipeTransform {
    transform(month: any): any {
        let months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[parseInt(month) - 1];
    }
}