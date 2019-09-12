import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { SearchRouting } from './search.routing';

@NgModule({
    imports: [
        CommonModule,

        SearchRouting,

    ],
    declarations: [
        SearchComponent
    ]
})
export class SearchModule {}
