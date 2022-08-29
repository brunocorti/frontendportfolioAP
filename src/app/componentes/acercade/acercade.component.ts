import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {
  persona: persona = new persona("","")
  constructor(public servicioService: ServicioService) { }

  ngOnInit(): void {
    this.servicioService.getPersona().subscribe(data => {
      this.persona = data
    })
  }

}
