import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor() { }

  public upLoadImage($event:any){
    const file = $event.target.files[0]
    console.log(file);
  }
  public uploadPhoto($event:any){
    const file = $event.target.files[0]
    console.log(file);
  }
}
