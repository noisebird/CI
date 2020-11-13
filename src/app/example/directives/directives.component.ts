import { Component, OnInit } from '@angular/core';


const options = [
  {
    label: '中国',
    value: 'CN',
  },
  {
    label: '美国',
    value: 'US',
  },
  {
    label: '俄国',
    value: 'RU',
  },
  {
    label: '英国',
    value: 'EN',
  }
];
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.less']
})
export class DirectivesComponent implements OnInit {

  options = options;
  value = '';
  showDropDown = false;
  constructor() { }

  ngOnInit() {
  }

  selectValue(option) {
    this.value = option.label;
  }
  handleClick() {
    this.showDropDown = !this.showDropDown;
  }

  clickOutside() {
    this.showDropDown = false;
  }

}
