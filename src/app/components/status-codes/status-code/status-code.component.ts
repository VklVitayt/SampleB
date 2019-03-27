import {Component, Input, OnInit} from '@angular/core';
import {StatusCodesComponent} from '../status-codes.component';
import {StatusCode} from '../../../models/status-code';

@Component({
  selector: 'app-status-code',
  templateUrl: './status-code.component.html',
  styleUrls: ['./status-code.component.scss']
})
export class StatusCodeComponent implements OnInit {
    @Input() statusCode = new StatusCode();

  constructor(private codesService: StatusCodesComponent) {
  }

  ngOnInit() {
  }

}
