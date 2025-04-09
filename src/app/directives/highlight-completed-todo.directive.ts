import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]'
})
export class HighlightCompletedTodoDirective {

  isCompleted = input(false);
  e1 = inject(ElementRef);

  constructor() { }

  stylesEffect = effect(() => {
    if(this.isCompleted()) {
      this.e1.nativeElement.style.textDecoration = 'line-through';
      this.e1.nativeElement.style.backgroundColor = '#d3f9d8';
      this.e1.nativeElement.style.color = '#6c757d';
    } else {
      this.e1.nativeElement.style.textDecoration = 'none';
      this.e1.nativeElement.style.backgroundColor = '#fff';
      this.e1.nativeElement.style.color = '#000';
    }
  
   
  })
  
}
