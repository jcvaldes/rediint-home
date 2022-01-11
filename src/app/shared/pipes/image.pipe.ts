import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env';
import urljoin from 'url-join';
@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  imgUrl: string;
  transform(img: string, tipo: string = 'user'): any {
    this.imgUrl = urljoin(environment.apiUrl, '/img');
    if (!img) {
      return this.imgUrl + '/user/xxx';
    }
    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'user':
        this.imgUrl += '/users/' + img;
        break;
      case 'products':
        this.imgUrl += '/products/' + img;
        break;
      default:
        console.log('tipo de imagen no existe, usuario, producto');
        this.imgUrl += '/user/xxx';
    }
    return this.imgUrl;
  }
}
