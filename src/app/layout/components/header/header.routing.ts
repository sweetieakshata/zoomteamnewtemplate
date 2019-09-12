import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SearchComponent } from '../../search/search.component';


const routes: Routes = [
    {path: '', component:HeaderComponent},
    { path: 'search', component:SearchComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HeaderRouting {
}
