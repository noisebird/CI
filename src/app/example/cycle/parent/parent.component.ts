import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit, DoCheck, OnChanges, OnDestroy, AfterViewChecked,
  AfterViewInit, AfterContentInit, AfterContentChecked {
  constructor() {
    console.log('parent constructor.......');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent onChanges.....');
  }


  ngOnInit() {
    console.log('parent onInit.....');
  }

  ngDoCheck(): void {
    console.log('parent doCheck.....');
  }


  ngAfterContentChecked(): void {
    console.log('parent contentChecked.....');
  }

  ngAfterContentInit(): void {
    console.log('parent contentInit.....');
  }

  ngAfterViewChecked(): void {
    console.log('parent viewChecked.....');
  }

  ngAfterViewInit(): void {
    console.log('parent viewInit.....');
  }

  ngOnDestroy(): void {
    console.log('parent destroy.....');
  }

  receiveValue(value) {
    console.log(value, 'value.....');
  }


}
