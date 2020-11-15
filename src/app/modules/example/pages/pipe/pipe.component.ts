import { Component, OnInit } from '@angular/core';
import { FormatterMoneyPipe } from '../../pipes/formatter-money.pipe';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.less']
})
export class PipeComponent implements OnInit {

  constructor() { }

  /**
   * Ts中使用pipe
   */
  ngOnInit() {
    const formatterMoneyPipe = new FormatterMoneyPipe();
    console.log(formatterMoneyPipe.transform(123.312313, 2, 2));
  }

}
