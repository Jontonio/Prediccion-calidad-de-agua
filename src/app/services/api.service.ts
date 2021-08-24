import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Water } from '../models/water';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = 'http://127.0.0.1:5000/water'

  constructor(private http:HttpClient) { }
  resultado:number = -1;

  sendData(data:Water){
    this.http.post(this.url, data).subscribe( res => {
      console.log(res)
      if(res==1){
        this.resultado = res as number;
      }else {
        this.resultado = res as number;
      }
    }, err =>{
      console.log(err)
    })
  }

}
