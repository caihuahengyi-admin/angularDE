/*
 * @Author: your name
 * @Date: 2020-12-28 22:25:28
 * @LastEditTime: 2021-01-10 11:01:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo06\src\app\components\footer\footer.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  public msg="我是子组件footer的msg";
  constructor() { }

  ngOnInit(): void {
  }

  run(){

    alert("我是一个子组件的run方法");
  }

}
