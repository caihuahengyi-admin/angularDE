/*
 * @Author: your name
 * @Date: 2020-11-29 16:02:46
 * @LastEditTime: 2020-11-29 22:53:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \angulardemo04\src\app\components\todolist\todolist.component.spec.ts
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistComponent } from './todolist.component';

describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
