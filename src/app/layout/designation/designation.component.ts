import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Designation } from './designation';


import { DesignationdataService } from './designationdata.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

    constructor(private http: HttpClient,private modalService: NgbModal,private _data:DesignationdataService) { }
    updatedItem: number;
    title = 'Designations';
    closeResult: string;
    selectedDesignationOption: string;
    name: string;
    msg = 'Are You Sure!';
    description:string;
    id:number;
    arrDesig: Designation[]=[];
    editId:number;
    editName:string;
    editDescription:string;
    item:string;


    ngOnInit() {
      this.getDesig();
    }

    getDesig(){
        this._data.getDesignations().subscribe(
            (data:Designation[])=>{
              this.arrDesig=data;
              console.log(this.arrDesig);
            }
            );
    }

    onSearch(value) {

    console.log(value);
    if (value != '') {
    this.arrDesig = this.arrDesig.filter(x => x.name.startsWith(value));
       }
    else {
      this._data.getDesignations().subscribe(
        (data: Designation[]) => {
          this.arrDesig = data;
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
    this.name = this.arrDesig[i].name;
    this.description = this.arrDesig[i].description;
    // console.log('updating');
    this.updatedItem = i;

    this.modalService.open(content);
    }


    // delete
    onDesigDelete(id:number) {
          this._data.deleteDesignation(id).subscribe(
             (data: any)=> {
                alert('successfully deleted');
                this.ngOnInit();
            }
       );

    }

onFormSubmit(f) {
    if (this.selectedDesignationOption == 'Add') {

    console.log(this.id);
    this._data.addDesignation(f.value).subscribe((data: any) => {
    console.log(f.value);
    alert("successfully added new records");
    this.getDesig();
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
    this._data.editDesignation(req)
    .then(res => {
    if (res) {
        alert('Updated');

        this.getDesig();
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

