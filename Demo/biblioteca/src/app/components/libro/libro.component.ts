import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent implements OnInit {
  libros: Libro[] = [];
  escritorId: number = 0;
  constructor(
    private activatedRoute: ActivatedRoute,
    private lbService: LibrosService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((params) => {
      this.escritorId = params['escritorId'];
      this.libros = this.lbService.getBooksOf(this.escritorId);
    });
  }
}
