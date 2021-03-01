/*
 * @Author: your name
 * @Date: 2020-12-04 17:52:40
 * @LastEditTime: 2020-12-06 14:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo04\src\app\services\storage.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  //设置数据
  set(key:string,value:any){
    //只能设置字符串
    localStorage.setItem(key,JSON.stringify(value));
  }
//获取数据
  get(key:string){

    // return 'this is a service';
    //反序列化一下，因为只能设置字符串，所以变成对象
    return JSON.parse(localStorage.getItem(key));
  }
//删除数据
   remove(key:string){

    localStorage.removeItem(key);
   }
}
