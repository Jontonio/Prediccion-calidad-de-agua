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
  load:boolean = false;

  sendData(data:Water){
    this.load = true;
    this.http.post(this.url, data).subscribe( res => {
      setTimeout(() => {
        this.load= false;
        if(res==1){
          this.resultado = res as number;
        }else {
          this.resultado = res as number;
        }
      }, 1000);
    }, err =>{
      this.load = false;
      console.log(err)
    })
  }

}
