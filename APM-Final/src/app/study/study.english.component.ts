import {Component,Injectable} from "@angular/core";


@Component({"template":"<div>I love studying</div>"})
@Injectable()
export class StudyEnglishComponent{

   
   public vocabulary(){
      console.log("for the record, I have finished my vocabulary today!")
   }

}