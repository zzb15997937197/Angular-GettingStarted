import { Component } from "@angular/core";

import { StudyEnglishComponent} from "../study/study.english.component";


@Component({
    selector:'hello-word',
    template:'<div class="hello" style="font:200px">hello world</div>',
    styleUrls:['./helloWord.component.css'],
})
export class HelloComponent{

  public say="hi angular !";

  public studyEnglish:StudyEnglishComponent;
  
  /**
   * 使用构造器形式注入
   */
  constructor(studyEnglish:StudyEnglishComponent){
    this.studyEnglish=studyEnglish;
    console.log(this.sayHai(this.say));
   }

   


    public sayHai(params:String) {
    this.studyEnglish.vocabulary();
        return "hi,"+params;
    }

}


