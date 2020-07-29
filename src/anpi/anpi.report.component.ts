import { Component, Input } from '@angular/core';
import { User } from '../main/user';
import { AnpiReportPrecautionsComponent } from './anpi.report.precautions.component';


@Component({
  selector: 'anpi-report',
  templateUrl: './anpi.report.component.html',
})
export class AnpiReportComponent  {
  @Input() name: string;
  @Input() id: string;
}

