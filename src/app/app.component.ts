import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'water-predict';
  formData:FormGroup;

  constructor(public _api:ApiService, private fb:FormBuilder){
    this.form();
  }

  form(){
    this.formData = this.fb.group({
      tipo_algoritmo:['tipo', Validators.required],
      Dureza:[, Validators.required],
      Solidos_TDS:[, Validators.required],
      Monocloramina:[, Validators.required],
      Conductividad:[, Validators.required],
      Carbon_Organico:[, Validators.required],
      Turbiedad:[, Validators.required],
      Ph:[, Validators.required],
      Sulfato:[, Validators.required],
      Trihalometanos:[, Validators.required]
    })
  }

  // function send data for prediction
  sendPredict(){
      if(this.formData.invalid){
        Object.keys(this.formData.controls).forEach( input =>{
          this.formData.controls[input].markAllAsTouched()
        })
        return;
      }else if(this.formData.value.tipo_algoritmo!='tipo'){
        this._api.sendData(this.formData.value);
      }
  }

  // function clear 
  clear(){
    this.formData.reset();
    this.formData.controls['tipo_algoritmo'].setValue('tipo')
    this._api.resultado = -1;
  }

  // functions getters for validators 
  get dureza(){
    return this.formData.controls['Dureza'].invalid && this.formData.controls['Dureza'].touched;
  }
  get solidos_TDS(){
    return this.formData.controls['Solidos_TDS'].invalid && this.formData.controls['Solidos_TDS'].touched;
  }
  get monocloramina(){
    return this.formData.controls['Monocloramina'].invalid && this.formData.controls['Monocloramina'].touched;
  }
  get conductividad(){
    return this.formData.controls['Conductividad'].invalid && this.formData.controls['Conductividad'].touched;
  }
  get carbon_Organico(){
    return this.formData.controls['Carbon_Organico'].invalid && this.formData.controls['Carbon_Organico'].touched;
  }
  get turbiedad(){
    return this.formData.controls['Turbiedad'].invalid && this.formData.controls['Turbiedad'].touched;
  }
  get ph(){
    return this.formData.controls['Ph'].invalid && this.formData.controls['Ph'].touched;
  }
  get sulfato(){
    return this.formData.controls['Sulfato'].invalid && this.formData.controls['Sulfato'].touched;
  }
  get trihalometanos(){
    return this.formData.controls['Trihalometanos'].invalid && this.formData.controls['Trihalometanos'].touched;
  }
  get tipo(){
    return (this.formData.value.tipo_algoritmo=='tipo') && this.formData.controls['tipo_algoritmo'].touched;
  }


}
