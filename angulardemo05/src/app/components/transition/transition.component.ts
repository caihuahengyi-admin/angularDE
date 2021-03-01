/*
 * @Author: your name
 * @Date: 2020-12-13 20:02:27
 * @LastEditTime: 2020-12-28 21:57:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo05\src\app\components\transition\transition.component.ts
 */
import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.scss']
})
export class TransitionComponent implements OnInit {
flag = 1;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

//通过获取aside节点让侧边栏显示
  showAside(){

    //原生js获取dom节点
    if(this.flag){
    var asideDom:any=document.getElementById('aside');

    asideDom.style.transform="translate(0,0)";

    this.flag = 0;
  }

else{
  this.flag = 1;
var asideDom:any=document.getElementById('aside');

asideDom.style.transform="translate(100%,0)";
}
}
  }
// //让侧边栏隐藏
//   hidAside(){

//     //原生js获取dom节点

    
//     var asideDom:any=document.getElementById('aside');

//     asideDom.style.transform="translate(100%,0)";
//   }