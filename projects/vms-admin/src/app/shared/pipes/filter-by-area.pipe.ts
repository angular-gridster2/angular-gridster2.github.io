import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterByArea' })

export class FilterByAreaPipe implements PipeTransform {

  /**
   * - []: array: input
   * - keySearch: input
   * - id, name, age ... : fields
   * eg: [] | filterByArea: 'id,name,age': keySearch"
   * @param value
   * @param keys
   * @param term
   */
  public transform(value: any, keys: string, term: string) {
    try {
      if (!term) {
        return value;
      } else {
        // tslint:disable-next-line: max-line-length
        return (value || []).filter(item => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
      }
    } catch (error) {
      console.error('filterByArea: ' + error);
    }
  }
}
