import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { CommonHttpService } from 'src/app/shared/common-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationdataService {


    constructor(private http: HttpClient,private CommonHttpService:CommonHttpService) { }

    // private mobUrl = 'api/desig';
    SERVER_URL: string = 'https://18232d92.ngrok.io/api/Settings/GetDesignations';
    SERVER_URL_ADD: string ='https://18232d92.ngrok.io/api/Settings/InsUpdateDesignation';

    SERVER_URL_DESG_DEL: string='https://18232d92.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';






    public getDesignations():Observable<any> {
        return this.http.get(this.SERVER_URL);
        }

        public addDesignation(f) {
            console.log(f);
            console.log(JSON.stringify(f));
            let body = JSON.stringify(f);
            let head = new HttpHeaders().set("Content-Type", "application/json");
            return this.http.post(this.SERVER_URL_ADD, body, {headers: head});

            }


          public editDesignation(item:any):Promise<any> {
                console.log(item);

                return this.CommonHttpService.globalPostService(this.SERVER_URL_ADD,item).then(data=>{
                    return data;
                });
                }




            public deleteDesignation(designationID) {
                let head = new HttpHeaders().set("Content-Type", "application/json");
                console.log('how it is getting ID?:' + designationID);
                // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
                return this.http.post(this.SERVER_URL_DESG_DEL+designationID, { headers: head });
                }


}
