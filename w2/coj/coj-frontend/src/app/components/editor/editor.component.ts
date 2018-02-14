import { Component, OnInit } from '@angular/core';

declare var ace: any;

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  editor: any;
  languages: string[] = ['Java', 'Python'];
  language: string = 'Java';

  defaultContent = {
    "Java": `public class Example {
    public static void main(String[] args){
        //type your code here
    }
}`, "Python": `class Solution:
    def example():
        # write your code here`
  }
  constructor() { }

  ngOnInit() {
      this.editor = ace.edit("editor");
      this.editor.setTheme("ace/theme/terminal");
      this.editor.session.setMode("ace/mode/java");
      this.editor.setValue(this.defaultContent["Java"]);
  }

  resetEditor(): void {
      this.editor.setValue(this.defaultContent[this.language]);
      this.editor.getSession().setMode("ace/mode/" + this.language.toLowerCase());
  }

  setLanguage(language: string): void {
      this.language = language;
      this.resetEditor();
  }

  submit(): void {
      let user_code = this.editor.getValue();
      console.log("The user code is --------------");
      console.log(user_code);
  }

}
