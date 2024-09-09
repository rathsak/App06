import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private detail:NavController) 
  {}

  gotodetail(){
    this.detail.navigateForward('/detail')


  }




  Gotodetail(i:any){
    this.detail.navigateForward('/detail',{state:{i}})
  }

items=[
  {
    id:1,
    name:"iPhone 15 Pro max",
    price:39900,
    detail:"The is a iPhone 14 promax by Apple",
    ImagesURL:"assets/product/i15promax 1.png"

  },
  {
    id:2,
    name:"Samsung S24 Ultra",
    price:34900,
    detail:"The is a Samsung S24 Ulter by Samsung",
    ImagesURL:"assets/product/s24u 1.png"
  },
  {
    id:3,
    name:"Samsung A54 5G",
    price:34900,
    detail:"The is a Samsung A54 5G by Samsung",
    ImagesURL:"assets/product/A54 1.png"

  },
  {
    id:4,
    name:"Xiaomi 14T Pro",
    price:34900,
    detail:"The is a Xiaomi 14T Pro by Xiaomi",
    ImagesURL:"assets/product/mi14tpro 1.png"
  },
]

}