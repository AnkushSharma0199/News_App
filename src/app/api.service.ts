import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }
  getdata(topic){
   return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-06-01&sortBy=publishedAt&apiKey=a8c4cdf6369840d7994eac5ee431e1d0')
  }
  

}
