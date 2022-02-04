import { Injectable } from '@angular/core';
import { IProduct } from '../shared-classes-and-types/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productList:IProduct[]=[{ID:1, Name:'sneakers',Quantity:10,Price:1700,Img:'img10',},{ID:2, Name:'bags',Quantity:50,Price:700,Img:'img10',},{ID:2, Name:' hoodies ',Quantity:10,Price:800,Img:'img10',},{ID:3, Name:'Soccer',Quantity:30,Price:1600,Img:'img10',},{ID:4, Name:'Jackets',Quantity:60,Price:1800,Img:'img10',}]
  constructor() {
  }
  getAllProducts(){
    return this.productList;
  };
  getProductById(id:number){
    const product = this.productList.find(product => product.ID== id);
    if(!product || !(typeof id == 'number')) {
      return null;
    }
    return product;
  }
}
