import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '../../../shared/local-storage.service';

import { Search } from '../../search/search';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    @Output() emit=new EventEmitter();

    constructor(private translate: TranslateService, public router: Router, private LocalStorageService: LocalStorageService, private _router:Router) {

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        this.LocalStorageService.removeAllExtItems();
      this.LocalStorageService.clearAllItem();
    //   this._router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
    onSearchClick(searchTerm){
        this.emit.emit(searchTerm);
        console.log(searchTerm);
        }

        onEnter(){
            this._router.navigate(['/search']);
        }

}
