import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  inputControl: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.inputControl = _fb.group({
      sourceUrl: ['https://notalwaysright.com/their-sub-ordering-skills-are-subpar/'],
      sourceUrlSuffix: ['/'],
      contentTag: ['div'],
      contentClass: ['post_content']

    })
  }

  ngOnInit() {
  }

  getContent() {

  }

}
