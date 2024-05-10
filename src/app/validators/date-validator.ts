import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dateValidator():ValidatorFn{
    return (control:AbstractControl): {[key:string]:any} | null => {
        const inputDate = new Date(control.value);
        if(isNaN(inputDate.getTime())){
            return {'invalidDate':true}
        }

        const today = new Date();

        const aHundredYearsAgo = new Date(today.getFullYear() - 150, today.getMonth(), today.getDate());

        if(aHundredYearsAgo > inputDate){
            return {'tooOld':true}
        }

        const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    
        if(eighteenYearsAgo < inputDate){
            return {'notOldEnough':true}
        }
        return null
    }
}