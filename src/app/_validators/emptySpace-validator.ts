import { FormControl } from "@angular/forms";

export function noEmptySpace(control: FormControl):{ [key: string] : any} | null {
    const trimmedValue = control.value.trim();
  
    if (trimmedValue === '') {
      return { noEmptySpace: true }; // Clear and descriptive error key
    }
  
    return null;
  }