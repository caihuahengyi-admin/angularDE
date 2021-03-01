/*
 * @Author: your name
 * @Date: 2020-11-29 12:27:16
 * @LastEditTime: 2020-12-06 15:00:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo04\src\app\components\search\search.component.ts
 */

/*
1.ng g service services/storage来创建服务

2.app.module.ts里边引入创建的服务并且声明这个服务

引入：import {StorageService} from './services/storage.service';

声明：  providers: [StorageService]


3.在用到的组件里面

    引入服务

    注意路径的变化

    import {StorageService} from '../../services/storage.service';

    //初始化

     constructor(public storage:StorageService) { 
    
     let s = this.storage.get();

      console.log(s);

  }
*/
import { Component, OnInit } from '@angular/core';

//引入服务

import {StorageService} from '../../services/storage.service';


//可以这样使用服务但是不推荐
var storage=new StorageService();



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  public keyword:string;
  public historyList:any[]=[];
  

  constructor(public storage:StorageService) {


   }

  ngOnInit() {

    console.log('页面刷新会触发生命周期函数');

    var searchlist:any=this.storage.get('searchlist');

    if(searchlist){

      this.historyList=searchlist;
    }
  }

  doSearch(){


    if(this.historyList.indexOf(this.keyword)==-1){
      
      this.historyList.push(this.keyword);


      this.storage.set('searchlist',this.historyList);

    }

    this.keyword='';

  }

  deleteHistory(key){
    alert(key);

    this.historyList.splice(key,1);
    this.storage.set('searchlist',this.historyList);
  }
}
