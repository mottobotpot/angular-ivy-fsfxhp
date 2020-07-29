import { Component } from '@angular/core';

@Component({
  selector: 'page-title',
  template: `<h2>{{title}}<h2>`
})
export class TitleComponent  {
  title:string='安否報告';
}
