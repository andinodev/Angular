import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-escritor',
  templateUrl: './escritor.component.html',
  styleUrls: ['./escritor.component.css']
})
export class EscritorComponent implements OnInit {

  escritor:any = ''
  escritorId: number = 0
  constructor(private activatedRoute: ActivatedRoute,private escService: EscritoresService) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.escritorId = params['escritorId']
        this.escritor = this.escService.getOne(this.escritorId)
    })
  }

}
