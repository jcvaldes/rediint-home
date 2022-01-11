import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
    if (!term) return value;
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}


// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(value: any[], searchTerm: string, fields: string): any[] {
//     const fieldsFilter = fields.split(',');
//     debugger
//     if (!value || !searchTerm) {
//       return value;
//     }
//     return value.filter(item => {
//       return fieldsFilter.length === 1
//                 ? item[fieldsFilter[0]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
//                 // tslint:disable-next-line: max-line-length
//                 : item[fieldsFilter[0]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1  || item[fieldsFilter[1]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
//     });
//   }
// }
