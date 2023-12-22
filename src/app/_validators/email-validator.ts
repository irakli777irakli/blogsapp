import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export class EmailValidator {
    static validateEmail(controlName: string) : ValidatorFn {

        return (group: AbstractControl) : ValidationErrors | null => {
            const control = group.get(controlName);
            const value = control?.value;
            const isValid = value.endsWith('@redberry.ge');
            return !value || isValid ? null : { invalidEmail: true };
        

            
        }
    }
}

// new way
export function validateEmail(control: FormControl) : { [key: string]: any } | null {
    const value = control.value;
    const isValid = value.endsWith('@redberry.ge');
    return !value || isValid ? null : { invalidEmail: true };

}