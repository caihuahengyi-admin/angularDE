/*
 * @Author: your name
 * @Date: 2020-12-13 19:49:29
 * @LastEditTime: 2020-12-13 19:56:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo05\src\app\components\header\header.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  run(){

    console.log('我是header里边的run方法');
  }
}
