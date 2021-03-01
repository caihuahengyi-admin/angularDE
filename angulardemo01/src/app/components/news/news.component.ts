/*
 * @Author: your name
 * @Date: 2020-11-14 15:18:53
 * @LastEditTime: 2020-11-14 15:59:26
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo01\src\app\components\news\news.component.ts
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
title="我是一个新闻组件 ";
  constructor() { }

  ngOnInit(): void {
  }

}
