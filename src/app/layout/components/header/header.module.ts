import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderRouting } from './header.routing';
import { HeaderComponent } from './header.component';


@NgModule({
    imports: [
        CommonModule,

        HeaderRouting,

    ],
    declarations: [
        HeaderComponent
    ]
})
export class HeaderModule {}
