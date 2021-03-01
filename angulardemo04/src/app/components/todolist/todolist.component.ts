/*
 * @Author: your name
 * @Date: 2020-11-29 16:02:46
 * @LastEditTime: 2020-12-06 15:09:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo04\src\app\components\todolist\todolist.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';


//引入服务

import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;

  public todolist:any[]=[];
//声明一下获取实类
  constructor(public storage:StorageService) { 
    
    

  }

  ngOnInit() {
    console.log('页面刷新会触发生命周期函数');

    var todolist:any=this.storage.get('todolist');

    if(todolist){

      this.todolist=todolist;
    }
  }
 
  doAdd(e){


    if(e.keyCode==13){
//如果不存在才增加
      if(!this.todolistHasKeyword(this.todolist,this.keyword)){
        this.todolist.push({
          title:this.keyword,
          status:0                             //0表示待办事项，1表示已完成事项
        });
        this.keyword='';


        this.storage.set('todolist',this.todolist);        //用到this一定要注意this指向
      }else{

        alert("数据已经存在");
        this.keyword='';
      }
      }

      }
    deleteData(key){

      this.todolist.splice(key,1);
      this.storage.set('todolist',this.todolist);
    }

    //如果数组里边有keyword返回true 否则返回false
todolistHasKeyword(todolist:any,keyword:any){
//异步，会存在问题

  // todolist.array.forEach(value => {
    
  //   if(value.title==keyword){

  //     return true;
  //   }

  // });

  if(!keyword) return false;


for(var i=0;i<todolist.length;i++){

  if(todolist[i].title==keyword){

    return true;
  }
}

  return false;
}

checkboxChange(){

  console.log('事件触发了');

  this.storage.set('todolist',this.todolist);
}
    }