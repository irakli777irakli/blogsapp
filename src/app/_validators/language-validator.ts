import { FormControl } from "@angular/forms";


export function validateLanguage(control: FormControl) : { [key: string] : any} | null {
    const re = /^[\u10A0-\u10FF\s]+$/;

    if (!re.test(control.value)) {
        return { onlyGeorgianLetters: true };
      }
    
      return null;
}