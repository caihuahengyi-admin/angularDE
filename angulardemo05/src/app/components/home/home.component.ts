/*
 * @Author: your name
 * @Date: 2020-12-13 18:05:13
 * @LastEditTime: 2020-12-13 18:43:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo05\src\app\components\home\home.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

public flag:boolean=true;

  constructor() { }

  ngOnInit(): void {

    //组件和指令初始化完成       并不是真正的dom加载完成


    let oBox:any=document.getElementById('box');

    console.log(oBox.innerHTML);

    oBox.style.color="red";

//获取不到dom节点
    /*let oBox1:any=document.getElementById('box1');

    console.log(oBox1.innerHTML);

    oBox1.style.color="blue";
    */



    
  }

  //视图加载完成以后触发的方法             dom加载完成（建议把dom操作放在这里边）
  ngAfterViewInit() {
  
    let oBox1:any=document.getElementById('box1');

    console.log(oBox1.innerHTML);

    oBox1.style.color="blue";
  }

}
