import { Icategory } from './../shared-classes-and-types/icategory';
import { IProduct } from './../shared-classes-and-types/iproduct';
import { DiscountOffers } from './../shared-classes-and-types/discount-offers';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  Discount!:DiscountOffers;
  StoreName !:string;
  StoreLogo !:string;
  ProductList !: IProduct[];
  CategoryList !: Icategory[];
  ClientName !: string;
  IsPurshased!: boolean;
  array= [];

  constructor() {
    this.Discount=  DiscountOffers['15%']
    this.StoreName="Adidas";
    this.StoreLogo="../../assets/adidas.png"

    this.ProductList=[{ID:1, Name:'sneakers',Quantity:10,Price:1700,Img:'img10',},{ID:2, Name:'bags',Quantity:50,Price:700,Img:'img10',},{ID:2, Name:' hoodies ',Quantity:10,Price:800,Img:'img10',},{ID:3, Name:'Soccer',Quantity:30,Price:1600,Img:'img10',},{ID:4, Name:'Jackets',Quantity:60,Price:1800,Img:'img10',}];

    this.CategoryList=[{ID:1,Name:"shoes"},{ID:2,Name:"sportswear"},{ID:3,Name:"clothing"},{ID:4,Name:"accessories"}];
    
    this.ClientName= " ";
    this.IsPurshased= false;

   }

  ngOnInit(): void {
  }

}
