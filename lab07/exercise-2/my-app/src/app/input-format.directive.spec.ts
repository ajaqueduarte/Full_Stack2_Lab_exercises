import { InputFormatDirective } from './input-format.directive';
import { ElementRef } from '@angular/core';

describe('InputFormatDirective', () => {
  it('should create an instance', () => {
    const mockElementRef: ElementRef = new ElementRef(document.createElement('div'));
    const directive = new InputFormatDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
