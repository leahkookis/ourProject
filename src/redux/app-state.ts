import ISuccessfulLoginData from "../models/ISuccessfulLoginData";
import IMessage from "../models/Message";




export class AppState{
 public messages: IMessage[] = []; 
 public loginData:number = 0;
 public userName: string="";  
 public sendSearchText: string = "";
 public token:any =""
}