
export interface RegisterContext {
    cPassword: string;
    email: string;
    password: string;
    state: number;
    lga:number;
    area:number;
    firstname:string;
    lastname:string;
    othernames:string;
    phonenumber:string;
}

export interface Tin {
    id?: number;
    tinNumber: string;
    tinStatus?: string;
    tinType: string;
    userId?: number;
}

export interface TaxGroup {
    id: number;
    name: string;
}

export interface LoginContext {
    id: number;
    email: string;
    state: any;
    lga: any;
    userAccountStatus: string;
    role: string;
    token: string;
    userType: string;
    name?: any;
    image: string;
    gender: string;
}
