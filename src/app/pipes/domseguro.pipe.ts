import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizar: DomSanitizer ) { }


  transform(value: string): any {
    const URL = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizar.bypassSecurityTrustResourceUrl( URL + value );
  }

}
