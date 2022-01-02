import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { ServiceService } from "./Service/service.service";

import { FormBuilder, FormControl,FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  form: FormGroup;

  constructor(
    public usuarioService: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      Nombre:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
      Correo: new FormControl('', [ Validators.required, Validators.email ]),
      confContraseña: new FormControl('', [ Validators.required]),
      Contraseña: new FormControl('', [ Validators.required  ])
    });

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.usuarioService.crear(this.form.value).subscribe(res => {
         console.log('Usuario created successfully!');
         
    })
  }

}
