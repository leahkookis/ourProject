import ISuccessfulLoginData from "../Modal/ISuccessfulLoginData";



export class AppState{
 public coupons: any = []; 
 public loginData: ISuccessfulLoginData | undefined;  
 public sendSearchText: string = "";
}