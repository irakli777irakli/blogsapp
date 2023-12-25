import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class AuthorValidator {
    static validateAuthor(controlName: string) : ValidatorFn {

        return (group: AbstractControl) : ValidationErrors | null => {
            const control = group.get(controlName);

            const value = control?.value;
            const words = value.split(' ');
            const hasTwoWords = words.length >= 2;
            return hasTwoWords ? null : { invalidAuthor: true };
        
        }
    }
}


export function atLeastTwoWordsValidator(control: FormControl): { [key: string] : any} | null  {
    const value = control.value.trim()?.replace(/\s+/g, ' ');
    if (value && value.split(' ').length < 2) {
      return { atLeastTwoWords: true };
    }
    return null;
  }



