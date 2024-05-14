export interface UpdateUserPasswordRequest{
    token:string;
    password:string;
    passwordConfirmation:string;
}