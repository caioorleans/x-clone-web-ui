import { AbstractControl, ValidatorFn } from "@angular/forms";

const REGEX = /^(?=.*[a-zA-ZÀ-ÿ])\s*[a-zA-ZÀ-ÿ\s]+\s*$/

export function nameValidator(minSize:number|null = null, maxSize:number|null = null):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any} | null => {
        const name = control.value.trim()

        if(!REGEX.test(control.value)){
            return {invalidName: true}
        }

        if(minSize)
            if(name.length < minSize)
                return {minSize: true}

        if(maxSize)
            if(name.length > maxSize)
                return {MaxSize: true}

        return null
    }
}