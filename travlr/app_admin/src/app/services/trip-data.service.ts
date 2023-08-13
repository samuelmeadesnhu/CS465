import { Inject, Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Trip } from '../models/trip'
import { User } from '../user';
import { AuthResponse } from '../authresponse';
import { BROWSER_STORAGE } from '../storage';

@Injectable()
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private tripUrl = `${this.apiBaseUrl}trips/`;

  // public addTrip(formData: Trip): Promise<Trip[]> {
  //   console.log('Inside TripDataServie#addTrip');
  //   return this.http
  //     .post(this.tripUrl, formData) // pass formData in request body
  //     .toPromise()
  //     .then(response => response.json() as Trip[])
  //     .catch(this.handleError);
  // }

  public addTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TripDataService#addTrip');
    console.log(formData);
    return this.http
      .post(this.tripUrl, formData, httpOptions) // added httpOptions
      .toPromise()
      .then(response => response as Trip[]) // get rid of .json()
      .catch(this.handleError);
  }

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataServie#getTrips');
    return this.http
      .get(`${this.apiBaseUrl}trips`)
      .toPromise()
      // .then(response => response.json() as Trip[])
      .then(response => response as Trip)
      .catch(this.handleError);
  }

  private handleError(error:any): Promise<any> {
    console.error('Something has gone wrong', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public getTrip(tripCode: string): Promise<Trip> {
    console.log('Inside TripDataService#getTrip(tripCode)');
    return this.http
      .get(this.tripUrl + tripCode)
      .toPromise()
      // .then(response => response.json() as Trip)
      .then(response => response as Trip[])
      .catch(this.handleError);
  }

  // public updateTrip(formData: Trip): Promise<Trip> {
  //   console.log('Inside TripDataService#upateTrip');
  //   console.log(formData);
  //   return this.http
  //     .put(this.tripUrl + formData.code, formData)
  //     .toPromise()
  //     .then(response => response.json() as Trip[])
  //     .catch(this.handleError);
  // }

  public updateTrip(formData: Trip): Promise<Trip> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`
      })
    };
    console.log('Inside TripDataService#updateTrip');
    console.log(formData);
    return this.http
      .put(this.tripUrl + formData.code, formData, httpOptions) // added httpOptions
      .toPromise()
      .then(response => response as Trip[]) // get rid of .json()
      .catch(this.handleError);
  }

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user)
  }

  private makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiBaseUrl}/${urlPath}`;
    return this.http
      .post(url, user)
      .toPromise()
      // .then(response => response.json() as AuthResponse)
      .then(response => response as AuthResponse)
      .catch(this.handleError);
  }
}