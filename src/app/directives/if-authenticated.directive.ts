import { Directive } from '@angular/core';

@Directive({
  selector: '[appIfAuthenticated]'
})
export class IfAuthenticatedDirective {

  constructor() { }

}
