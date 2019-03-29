import { Component, OnInit } from '@angular/core';
import {StatusCodesService} from '../../services/status-codes.service';
import {StatusCode} from '../../models/status-code';

@Component({
  selector: 'app-status-codes',
  templateUrl: './status-codes.component.html',
  styleUrls: ['./status-codes.component.scss']
})
export class StatusCodesComponent implements OnInit {
    private statusCodes: StatusCode[];
    childStatusCode = new StatusCode();


  constructor(private statusCodesService: StatusCodesService) {
      this.statusCodes = this.statusCodesService.getStatusCode();
  }

  ngOnInit() {
  }

    showStatusCode(sc: StatusCode) {
        this.childStatusCode = sc;
    }
}
