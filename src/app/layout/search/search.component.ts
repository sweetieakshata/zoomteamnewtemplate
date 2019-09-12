import { Component, OnInit } from '@angular/core';
import { Search } from './search';
import { SearchdataService } from 'src/app/services/appservices/searchdata.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    arr: Search[]=[];
    value:string;
  constructor(private _data:SearchdataService) { }

  ngOnInit() {
    this.getSearch();
  }

  getSearch(){
      this._data.getSearch(this.value).subscribe(
          (data:Search[])=>{
            this.arr=data;
            console.log(this.arr);
          }
          );
  }

  onSideBarClick(value) {
    if (value != "") {
        //this.artcle3[1]=this.artcle[1];
      //  console.log("vinay"+this.artcle3);
      this._data.getSearch(value).subscribe(
        (data:Search[])=>
          {

            console.log(data);
            this.arr=data;
          });
    } else {
    this._data.getSearch(value).subscribe(

            (data: Search[]) => {
              this.arr = data;
              console.log(this.arr);
            // var arr = _.values(arr);
        //    this.all_articles = this.arr['kbArticles'];
        //     console.log(this.artcle[1]);
        //     this.article=this.artcle;
        //     console.log(this.article[1]);
            },
            function(error) {
              alert(error);
            },
            function() {}
          );
    }
  }
}
