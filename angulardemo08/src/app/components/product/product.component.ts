/*
 * @Author: your name
 * @Date: 2021-02-10 14:12:43
 * @LastEditTime: 2021-02-21 22:40:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo08\src\app\components\product\product.component.ts
 */
/*
js跳转路由

  1.动态路由

    //引入模块
      import { Router } from '@angular/router';

    //声明模块
      constructor(public router:Router) { }

    //跳转
      //动态路由写第二个参数
        this.router.navigate(['/newscontent','123'])
      //静态  
        this.router.navigate(['/home'])

  2.get传值

   //引入模块
      import { Router } from '@angular/router';

    //声明模块
      constructor(public router:Router) { }
    //跳转
      this.router.navigate(['/news'],{

        queryParams:{aid:123}
      });
*/
import { Component, OnInit } from '@angular/core';

import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  goNewsContent(){

    //路由跳转   适合普通和动态路由
    this.router.navigate(['/newscontent','123'])
  }
  
  goHome(){

    //路由跳转   适合普通和动态路由
    this.router.navigate(['/home'])
  }
  goNews(){

    //跳转并进行get传值
    let queryParams:NavigationExtras={

      queryParams:{'aid':123}
    }
    this.router.navigate(['/news'],queryParams);
  }
}
