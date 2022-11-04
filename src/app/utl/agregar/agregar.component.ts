import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlumnosUtl } from '../interfaces/utl.Interfaces';
import { UtlService } from '../service/utl.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

  //@Input() alumnosUtl:AlumnosUtl[]=[];

  //@Output() onNuevoAlumno:EventEmitter<AlumnosUtl>=new EventEmitter ();
  
  @Input() regAlumno:AlumnosUtl={
    nombre:'',
    edad:0
  }

  constructor(private alumnosutl:UtlService){}

  agregar(){
    
    //this.alumnosUtl.push(this.regAlumno);
    //this.onNuevoAlumno.emit(this.regAlumno);
    this.alumnosutl.agregarNuevoAlumno(this.regAlumno);
    this.regAlumno={
      nombre:'',
      edad:0
    }
  }

}
