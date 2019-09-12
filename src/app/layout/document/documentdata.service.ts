import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DocumentdataService {

    constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) { }

    SERVER_URL_DOC: string ='https://18232d92.ngrok.io/api/Settings/GetDocumentType';
    SERVER_URL_DOC_ADD: string ='https://18232d92.ngrok.io/api/Settings/InsUpdateDocumentType';
    SERVER_URL_DOC_Del: string='https://18232d92.ngrok.io/api/Settings/DeleteDocumentType?DocumentTypeId=';







    public getDocuments():Observable<any>  {
        return this.http.get(this.SERVER_URL_DOC);
        }
        public addDocuments(f) {
            console.log(f);
            console.log(JSON.stringify(f));
            let body = JSON.stringify(f);
            let head = new HttpHeaders().set("Content-Type", "application/json");
            return this.http.post(this.SERVER_URL_DOC_ADD, body, {headers: head});

            }



    public deleteDocument(documentID) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    console.log('how it is getting ID?:' + documentID);
    // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
    return this.http.post(this.SERVER_URL_DOC_Del + documentID, { headers: head });
    }


    editDocument(item:any):Promise<any> {
    console.log(item);


    return this.CommonHttpService.globalPostService(this.SERVER_URL_DOC_ADD,item).then(data=>{
        return data;
    });
    }





}





