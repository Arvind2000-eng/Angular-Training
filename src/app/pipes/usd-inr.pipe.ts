import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(value: number, arg1?: number, arg2?: number): any {
    return value*arg1*arg2;
  }

}
