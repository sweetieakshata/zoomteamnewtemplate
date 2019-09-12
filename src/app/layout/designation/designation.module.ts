import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignationComponent } from './designation.component';
import { DesignationRouting } from './designation-routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
        DesignationRouting,

    ],
    declarations: [
        DesignationComponent
    ]
})
export class DesignationModule {}
