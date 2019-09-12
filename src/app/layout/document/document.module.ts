import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DocumentRouting } from './document-routing';
import { DocumentComponent } from './document.component';

@NgModule({
    imports: [
        CommonModule,
         FormsModule,
         NgbModule,
        DocumentRouting

    ],
    declarations: [
        DocumentComponent
    ]
})
export class DocumentModule {}
