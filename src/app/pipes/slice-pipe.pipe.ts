import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe'
})
export class SlicePipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if(value.length > 20){
      return value.slice(0, 20) + '...';
    }
    return value;
  }

}
