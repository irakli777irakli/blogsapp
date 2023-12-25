import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function trimmedMinLength(minLength: number): ValidatorFn
 
{
  return (control: AbstractControl): ValidationErrors | null => {
    // string with single space in between words, others are trimmed
    const trimmedValue = control.value?.trim().replace(/\s+/g, ' ');
    // string without spaces
    const consequativeString = trimmedValue.replace(/\s/g, '');


    if (trimmedValue && consequativeString.length >= minLength) {
      return null; // Valid
    }
    return { trimmedMinLength: { requiredLength: minLength, actualLength: trimmedValue.length } };
  };
}

