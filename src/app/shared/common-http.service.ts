import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Headers, Response,ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as $ from 'jquery';
@Injectable()
export class CommonHttpService {
    constructor(private http: HttpClient,private AngHttp: Http) { }

    SERVER_URL: string = 'https://18232d92.ngrok.io/api/Settings/GetDesignations';
    SERVER_URL_ADD: string ='https://18232d92.ngrok.io/api/Settings/InsUpdateDesignation';

    SERVER_URL_DOC: string ='https://18232d92.ngrok.io/api/Settings/GetDocumentType';
    SERVER_URL_DOC_ADD: string ='https://18232d92.ngrok.io/api/Settings/InsUpdateDocumentType';
    SERVER_URL_DOC_Del: string='https://18232d92.ngrok.io/api/Settings/DeleteDocumentType?DocumentTypeId=';

    SERVER_URL_DESG_EDIT: string='https://18232d92.ngrok.io/api/Settings/GetDesignationsDetails?DesignationId=';

    SERVER_URL_DOC_EDIT: string='https://18232d92.ngrok.io/api/Settings/GetDocumentTypeDetails?DocumentTypeId={DocumentTypeId}';

    SERVER_URL_DESG_DEL: string='https://18232d92.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';

//   public getDesignations() {
//     return this.http.get(this.SERVER_URL);
//     }

//     public addDesignation(f) {
//         console.log(f);
//         console.log(JSON.stringify(f));
//         let body = JSON.stringify(f);
//         let head = new HttpHeaders().set("Content-Type", "application/json");
//         return this.http.post(this.SERVER_URL_ADD, body, {headers: head});

//         }

        // public getDocuments() {
        //     return this.http.get(this.SERVER_URL_DOC);
        //     }

        //     public addDocumnets(f) {
        //         console.log(f);
        //         console.log(JSON.stringify(f));
        //         let body = JSON.stringify(f);
        //         let head = new HttpHeaders().set("Content-Type", "application/json");
        //         return this.http.post(this.SERVER_URL_DOC_ADD, body, {headers: head});

        //         }

        //         public deleteDocument(documentID) {
        //             let head = new HttpHeaders().set("Content-Type", "application/json");
        //             console.log('how it is getting ID?:' + documentID);
        //             // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
        //             return this.http.post(this.SERVER_URL_DOC_Del+documentID, { headers: head });
        //             }

//                     public deleteDesignation(designationID) {
//                         let head = new HttpHeaders().set("Content-Type", "application/json");
//                         console.log('how it is getting ID?:' + designationID);
//                         // console.log(this.http.delete(this.SERVER_URL + designationID), { headers: head });
//                         return this.http.post(this.SERVER_URL_DESG_DEL+designationID, { headers: head });
//                         }

//                     editDesg(id,item) {
//                         let body = JSON.stringify(item);
//                         let head = new HttpHeaders().set("Content-Type", "application/json");
//                         return this.http.post(this.SERVER_URL_DESG_EDIT+id, body, { headers: head });
//                       }


                    //   editDoc(item) {
                    //     let body = JSON.stringify(item);
                    //     let head = new HttpHeaders().set("Content-Type", "application/json");
                    //     return this.http.put(this.SERVER_URL_DESG_EDIT, body, { headers: head });
                    //   }

           public globalPostService(url: string, data: any) {
             return this.http.post(url, data).toPromise();
          }

  public globalGetService(url: string, data: any) {
    var querystring = "?" + $.param(data);
    return this.http.get(url + querystring).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }

  public globalGetServiceByUrl(url: string, data: any) {
    return this.http.get(url + data).toPromise().
      catch(e => {
        //console.log("error happend", e);
      });
  }
  public globalPostStreamService(url: string, data: any,header) {
    return this.http.post(url, data,header).toPromise().catch(e => {
      //console.log("error happend", e);
      if (e.status == 401) {
        //console.log(e.statusText);
        // window.location.href = "../../access.html";
      }
    });

  }
  downloadfile(url,data) {
    var postData = new FormData();
		var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
    xhr.setRequestHeader( 'Control-Allow-Credentials', 'true');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.withCredentials = true;
    //xhr.responseType = 'blob';
    xhr.onreadystatechange = function (e){
      console.log(e);
    };
		xhr.onload = function (e) {
			var blob = xhr.response;
			this.saveOrOpenBlob(blob);
		}.bind(this)
		xhr.send(postData);
  }
  saveOrOpenBlob(blob)
  {
    console.log("blob",blob);
  }
  HttpBlobPostService(url: string, data: any) {
    return this.AngHttp.post(url,data,{responseType: ResponseContentType.Blob })
    .pipe(map(this.extractData))
    .pipe(catchError(this.handleError));
  }
  private extractData(res: Response) {
    // let body = res.json();
    return res || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    //console.error(errMsg);
    return Observable.throw(errMsg);
  }
  public async downloadResource(url: string): Promise<Blob> {
    let headers = new HttpHeaders();
    headers.append("Access-Control-Allow-Methods","GET, POST");
    headers.append("Access-Control-Allow-Origin","*");
    return  this.http.get<Blob>(url,
      {headers : headers,responseType: 'blob' as 'json'}).toPromise();
    //return file;
  }
}
