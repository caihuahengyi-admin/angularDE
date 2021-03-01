/*
 * @Author: your name
 * @Date: 2021-01-18 15:15:04
 * @LastEditTime: 2021-01-18 22:00:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo07\src\app\services\request.service.ts
 */
import { Injectable } from '@angular/core';

import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }
//同步
  getData(){

    return 'this is service data';
  }

  getCallbackData(cb){
//定时器
    setTimeout(() => {
      
      var username='张三';

// return username;

cb(username);
    }, 1000);
  }

  getPromiseData(){

    return new Promise((resolve)=>{

      resolve

          //定时器
          setTimeout(() => {
          
            var username='张三--Promise';
            resolve(username);
          }, 3000);
    })

  }

  getRxjsData(){

    return new Observable((observer)=>{


          //定时器
          setTimeout(() => {
          
            var username='张三--rxjs';
            observer.next(username);
            // observer.error('数据');
          }, 3000);
    })
    
  }

  //多次执行 
  getPromiseIntervalData(){

    return new Promise((resolve)=>{

      resolve

          //定时器
          setInterval(() => {
          
            var username='张三--Promise';
            resolve(username);
          }, 1000);
    })

  }
  getRxjsIntervalData(){
    let count=0;

    return new Observable<any>((observer)=>{
     
   
          //定时器
          setInterval(() => {
            
            var username='张三--rxjs-Interval'+count;
           
            observer.next(username);
            // observer.error('数据');
          }, 2000);
    })
  
  }

  getRxjsIntervalNum(){
    let count=0;

    return new Observable<any>((observer)=>{
     
   
          //定时器
          setInterval(() => {
            
            
           count++;
            observer.next(count);
            // observer.error('数据');
          }, 2000);
    })
  
  }

}
