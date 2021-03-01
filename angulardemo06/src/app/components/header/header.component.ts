/*
 * @Author: your name
 * @Date: 2020-12-28 22:25:00
 * @LastEditTime: 2021-01-10 10:43:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo06\src\app\components\header\header.component.ts
 */
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //接收父组件传来的数据
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;
  constructor() { }

  ngOnInit(): void {
  }

  getparentMsg(){
  //获取父组件的数据
    alert(this.msg);
  }
  getparentRun(){

//执行父组件的run方法
    // this.run();


    alert(this.home.msg);

    this.home.run();
  }


}
