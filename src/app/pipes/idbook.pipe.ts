import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idbook'
})
export class IdbookPipe implements PipeTransform {

  transform(id_book: number): string {
    return `Ref-${id_book.toString()}`;
  }
}