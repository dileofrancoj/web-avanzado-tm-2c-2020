import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  // 1800 | currency : 'ARS'
  transform(value: any): string {
    if (value) return value.charAt(0).toUpperCase() + value.slice(1);
    return value;
  }
}
