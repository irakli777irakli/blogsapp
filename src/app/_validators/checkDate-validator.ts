import { FormControl, ValidationErrors } from "@angular/forms";




export function ValidateDate(control: FormControl) : ValidationErrors | null {
    const date = control.value;

    if(date === null || date === undefined || date === ' ') {
        return { dateRequired: true };
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
        return { invalidDate: true };
    }

  return null;
}