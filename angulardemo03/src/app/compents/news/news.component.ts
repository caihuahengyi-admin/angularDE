/*
 * @Author: your name
 * @Date: 2020-11-15 13:54:54
 * @LastEditTime: 2020-11-15 16:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo03\src\app\compents\news\news.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

    /*
  声明属性的几种方式：

  public: 共有 *（默认）      可以在这个类里边使用，也可以在外边

  protected：保护类型           只有在当前类和子类里可以访问

  private: 私有               只有在当前类里才可以访问这个属性
  
  */

  //定义普通数据
  public title="我是一个新闻组件";

  msg='我是一个新闻组件的msg';
 //推荐此种,指定类型
  username:string='张三';

//推荐

public student:any="我是一个学生的属性（数据）"
  public userinfo:object={

    username:"张四",
    age:'20'
  }

  public massage:any;


  public content="<h2>我是一个html标签</h2>";


  //定义数组


public arr=['111','222','333'];


//推荐写法
  public list:any[]=['我是第一个新闻',222222,'我是第三个新闻']
  //第二种写法
  //public list:array<any>=['我是第一个新闻',222222,'我是第三个新闻']


  public userlist:any[]=[{

    username:'张三',

    age:20
  },{

    username:'李四',

    age:21
  },{

    username:'王五',

    age:40}];

  

    public cars:any[]=[

      {

        cate:"宝马",
        list:[

          {

            title:'宝马x1',
            price:'30w'
          },
          {

            title:'宝马x2',
            price:'30w'
          },
          {

            title:'宝马x3',
            price:'40w'
          },
        ]
      },
      {

        cate:"奥迪",
        list:[

          {

            title:'奥迪q1',
            price:'30w'
          },
          {

            title:'奥迪q2',
            price:'40w'
          },
          {

            title:'奥迪q3',
            price:'50w'
          },
        ]
      }
    ]
  constructor() { 

    this.massage='这是给属性赋值--  (改变属性的值)';
  }

  ngOnInit(): void {
  }

}
