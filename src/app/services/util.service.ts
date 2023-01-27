import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}

  public saveToStorage(key: string, val: object) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  public loadFromStorage(key: string) {
    var val: any = localStorage.getItem(key);
    return JSON.parse(val);
  }

  public makeId() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
