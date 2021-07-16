export class LoginRequestModel {
    username: string;
    password: string;
}

export class LoginResponseModel {
    userId: string;
}

export class LoginErrorModel {
    errMsg: string;
}