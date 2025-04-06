// src/app/product-list/product-list.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,NgbCarouselModule],
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
/* @Component({
	selector: 'ngbd-carousel-basic',
	imports: [NgbCarouselModule],
  templateUrl: './product-list-component.component.html',
})*/
export class ProductListComponent {
  products = [
    { id: 91, name: 'Camara', price: 250},
    { id: 2, name: 'Pantalón', price: 400},
    { id: 3, name: 'Zapatos', price: 600},
    { id: 4, name: 'Bolso', price: 350}
  ];
	images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
