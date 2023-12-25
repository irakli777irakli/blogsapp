import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";


export function fileRequired(control: AbstractControl) : ValidationErrors | null {
    const file = control.value as File;

    if(file === null || file === undefined || file.name === ' ') {
        return { fileRequired: true };

    }

    return null;
}