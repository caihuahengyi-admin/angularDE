/*
 * @Author: your name
 * @Date: 2020-12-13 19:18:08
 * @LastEditTime: 2020-12-13 20:00:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo05\src\app\components\home\components\news\news.component.ts
 */


 /**
  viewChild获取dom节点
  
  
  1.模板中给dom起一个名字

  <div #myBox>

      我是一个dom节点
  </div>



  2.在业务逻辑里边引入viewChild 

    import { Component, OnInit,ViewChild } from '@angular/core';



  3.写在类里边         @ViewChild('myBox') myBox:any;


  
  4.在生命周期函数里边获取dom

  this.myBox.nativeElement

  */
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  //获取dom节点

  @ViewChild('myBox') myBox:any;

  //获取一个组件

  @ViewChild('header') header:any;

  constructor() { }

  ngOnInit(){


  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
    console.log(this.myBox.nativeElement);

    this.myBox.nativeElement.style.width='100px';

    this.myBox.nativeElement.style.height='100px';

    this.myBox.nativeElement.style.background='red';

    console.log(this.myBox.nativeElement.innerHTML);



  }

      getChildRun(){

        
    //调用子组件里面的方法

    this.header.run();

  }
}
