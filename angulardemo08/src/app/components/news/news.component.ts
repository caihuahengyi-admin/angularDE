/*
 * @Author: your name
 * @Date: 2021-02-10 14:12:04
 * @LastEditTime: 2021-02-21 20:27:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo08\src\app\components\news\news.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public list:any[]=[];

  constructor() { }

  ngOnInit(): void {

    for(var i=0;i<10;i++){

      this.list.push('这是第'+i+'条数据');
    }
  }

}
