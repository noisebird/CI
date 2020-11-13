import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatterMoney'
})
export class FormatterMoneyPipe implements PipeTransform {

  transform(value: string | number, minimumFractionDigits: number = 1, maximumFractionDigits: number = 1): string {
    return Number(value).toLocaleString('zh', { minimumFractionDigits, maximumFractionDigits });
  }

}
