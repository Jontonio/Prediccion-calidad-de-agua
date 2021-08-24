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

  sendPredict(){
    if(this.formData.value.tipo_algoritmo!='tipo'){
      if(this.formData.valid){
        this._api.sendData(this.formData.value);
        console.table(this.formData.value)
      }
    }
  }

  clear(){
    this.formData.reset();
    this.formData.controls['tipo_algoritmo'].setValue('tipo')
    this._api.resultado = -1;
  }


}
