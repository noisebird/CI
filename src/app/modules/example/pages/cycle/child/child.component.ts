import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck, EventEmitter, HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, AfterViewChecked,
  AfterViewInit, AfterContentInit, AfterContentChecked {
  @Input() name = '';

  description = '我是描述';
  imagePath = '/assets/images/favicon.ico';
  isBlue = false;

  @Output() value$ = new EventEmitter<string>();
  constructor() {
    console.log('child constructor.......');
  }

  /**
   * 基本数据类型只要发生变化时就会触发，如果是引用数据类型，地址不发生变化时不会触发该钩子函数
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child onChanges.....');
  }

  ngOnInit() {
    console.log('child onInit.....');
  }

  // ngDoCheck(): void {
  //   console.log('child doCheck.....');
  // }

  ngAfterContentInit(): void {
    console.log('child contentInit.....');
  }

  ngAfterContentChecked(): void {
    console.log('child contentChecked.....');
  }

  ngAfterViewInit(): void {
    console.log('child viewInit.....');
  }

  ngAfterViewChecked(): void {
    console.log('child viewChecked.....');
  }

  ngOnDestroy(): void {
    console.log('child destroy.....');
  }

  onChange() {
    console.log(this.description, 'description.....');
  }

  clickBtn() {
    console.log('click btn.....');
  }

  emitValue() {
    this.value$.emit('我是来自子组件的值');
  }

  changeColor() {
    this.isBlue = true;
  }

  @HostListener('document:click', ['$event.target'])
  documentClick(target) {
    console.log(target);
  }
}
