import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 获取路径参数
    this.route.params.subscribe(params => {
      console.log(params, 'get params......');
    });

    // 获取 query 参数
    this.route.queryParams.subscribe(params => {
      console.log(params, 'get query params......');
    });

    // 获取 data 参数
    this.route.data.subscribe(data => {
      console.log(data, 'get data params......');
    });
  }

}
