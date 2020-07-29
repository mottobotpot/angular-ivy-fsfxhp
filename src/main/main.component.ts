import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent  {
  name: string;
  id: string;
}
