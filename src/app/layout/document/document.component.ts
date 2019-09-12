import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { Document } from './document';
import { HttpClient } from '@angular/common/http';
import { DocumentdataService } from './documentdata.service';
// import { DocumentdataService } from './documentdata.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {

    constructor(private http: HttpClient,private modalService: NgbModal,private _data:DocumentdataService) { }
    updatedItem: number;
    title = 'Documents';
    closeResult: string;
    selectedDesignationOption: string;
    msg = 'Are You Sure!';


    arrDoc: Document[]=[];
    editId:number;
    editName:string;
    editDescription:string;

    item:string;

     id: number;
    organizationId: number;
     name: string;
     description: string;
     isactive: boolean;
     isgeneral:boolean;
     createdby: number;
     createddate: Date;
     modifiedby: number;
     modifieddate: Date;


    ngOnInit() {
        this.getDoc();
     }
    getDoc(){
        this._data.getDocuments().subscribe(
            (data:Document[])=>{
                this.arrDoc=data;
              console.log(this.arrDoc);
            }
            );
    }
    onSearch(value) {

    console.log(value);
    if (value != '') {
    this.arrDoc = this.arrDoc.filter(x => x.name.startsWith(value));
    }
    else {
        this._data.getDocuments().subscribe(
          (data: Document[]) => {
            this.arrDoc = data;
          },
          function(error) {
            alert(error);
          },
          function() {}
        );
      }
    }

    // Add modal
    openAdd(content, passedTitle) {
    this.selectedDesignationOption = passedTitle;
    this.name = '';
    this.description = '';
    this.modalService.open(content);
    }

    // Edit modal popup
    openEdit(content, passedTitle, i,arr) {
    console.log(arr.id);
    this.id=arr.id;
    this.selectedDesignationOption = passedTitle;
    // console.log(i);
    this.name = this.arrDoc[i].name;
    this.description = this.arrDoc[i].description;
    // console.log('updating');
    this.updatedItem = i;
    this.modalService.open(content);
    }


    // delete

        onDocDelete(id:number) {
        this._data.deleteDocument(id).subscribe(
               (data: any)=> {
                   alert('successfully deleted');
                   this.ngOnInit();
               }
               );
            // if (confirm(this.msg) === true) {
            // this.arrDesig.splice(this.arrDesig.indexOf(id), 1);
            // }

            }


    onFormSubmit(f) {
    if (this.selectedDesignationOption == 'Add') {
        console.log(this.id);
    this._data.addDocuments(f.value).subscribe((data: any) => {
      console.log(f.value);
      alert("successfully added new records");
      this.getDoc();

    });
}
else {
    console.log(f.value);
    console.log(f.value.name);
    var req ={
    id : this.id,
    description : f.value.Description,
    name:f.value.Name
    };
    console.log(req);
    this._data.editDocument(req)
    .then(res => {
    if (res) {
        alert('Updated');

        this.getDoc();
    }
    else {
    console.log('failed');
    }
    }, error => {
    });

    }

this.modalService.dismissAll();
    }
    }
