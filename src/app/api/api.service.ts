import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  KEY = 'AIzaSyDgo_yF-_8KEUqAUauD7X_5jVtp1dVldVU';
  REGION = 'US';
  MAXRESULTS = 9;
  ORDER = 'date';
  DURATION = 'any';
  SAFE = 'none';

  constructor() {}
}
