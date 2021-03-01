/*
 * @Author: your name
 * @Date: 2020-12-28 22:22:13
 * @LastEditTime: 2021-01-10 11:04:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo06\src\app\components\news\news.component.ts
 */
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {


  @ViewChild('footer')  footer:any;
  constructor() { }

  ngOnInit(): void {
  }


  getchildMsg(){


    //获取footer子组件的数据

    alert(this.footer.msg);
    
  }

  getchildRun(){

    this.footer.run();
  }
}
