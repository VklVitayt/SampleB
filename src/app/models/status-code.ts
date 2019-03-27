import {ObjectType} from './object-type';
import {tick} from '@angular/core/testing';

export class StatusCode {
    id: number;
    code: string;
    description: string;
    objectType: ObjectType;
    objectTypeName: null;
    issueGrouping: boolean;
    createIncidents: boolean;
    status: string;
    constructor() {
        this.id = 0;
        this.code = '';
        this.description = '';
        this.objectType = new ObjectType();
        this.objectTypeName = null;
        this.issueGrouping = true;
        this.createIncidents = true;
        this.status = '';
    }
}
