import { Icategory } from './../shared-classes-and-types/icategory';
import { IProduct } from './../shared-classes-and-types/iproduct';
import { DiscountOffers } from './../shared-classes-and-types/discount-offers';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

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

  constructor(private productService:ProductServiceService) {
    this.Discount=  DiscountOffers['15%']
    this.StoreName="Adidas";
    this.StoreLogo="../../assets/adidas.png"

    this.CategoryList=[{ID:1,Name:"shoes"},{ID:2,Name:"sportswear"},{ID:3,Name:"clothing"},{ID:4,Name:"accessories"}];
    
    this.ClientName= " ";
    this.IsPurshased= false;
   }
  
  renderValues(){
    this.ProductList= this.productService.getAllProducts();
  }
  ngOnInit(): void {
  }

}
