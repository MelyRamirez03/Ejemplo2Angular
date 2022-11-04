import { Component, Input} from '@angular/core';
import {AlumnosUtl} from '../interfaces/utl.Interfaces';
import { UtlService } from '../service/utl.service';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {

  //alumnosUtl:AlumnosUtl[]=[];
  //@Input() alumnosUtl:AlumnosUtl[]=[];

  //Para poder usar el servicio se debe hacer una implementación del servicio a través del constructor

  get alumnos(){
    return this.alumnosUtl.alumnos;
  }

  constructor(private alumnosUtl:UtlService){

  }

}
