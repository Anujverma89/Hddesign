import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ImagedataService {

  constructor(private http: HttpClient) { }

  // fetching data from database

  vidoedata: string = "http://localhost:3000/video";
  imagedata: string = "http://localhost:3000/image";
  customerData: string = "http://localhost:3000/customer";
  socialData: string = "http://localhost:3000/social";
  reviewData: string = "http://localhost:3000/review";
  admindata: string = "http://localhost:3000/admin";
  loginData: string = "http://localhost:3000/login";
  // apiKey: string = "AIzaSyC_9_pPBPQb7sbMzf9BtPeWTFSPydeOSoM";

  // httperr refrence 




  // get cutomer leads
  getData() {
    let url = this.customerData;
    return this.http.get(url);

  }
  // post form data
  postFormData(customerData) {
    let url = this.customerData
    return this.http.post(url, customerData, { responseType: 'text' });
  }

  // delete cutomer data by is
  delCustomerDataById(customerId) {
    let url = this.customerData;
    return this.http.delete(url + "/" + customerId, { responseType: 'text' });

  }
  // delete all customer data

  deleteAllCustomer() {
    let url = this.customerData;
    return this.http.delete(url);

  }
  updateCustomer(id, customerData) {
    let url = this.customerData;
    return this.http.put(url + '/' + id, customerData, { responseType: 'text' })
  }







  // getsocaildata
  getSocialData() {
    let url = this.socialData;
    return this.http.get(url);

  }
  // post form data
  postSocailData(socilaData) {
    let url = this.socialData
    return this.http.post(url, socilaData, { responseType: 'text' });
  }

  // delete cutomer data by is
  delSocaildataById(socialID) {
    let url = this.socialData;
    return this.http.delete(url, socialID);

  }
  // delete all customer data

  deleteAllsocailData(id) {
    let url = this.socialData;
    return this.http.delete(url + '/' + id, { responseType: 'text' });

  }

  // updatedata
  updateSocail(id, data) {
    let url = this.socialData;
    return this.http.put(url + '/' + id, data, { responseType: 'text' })
  }




  // get reviewdata
  getReviewData() {
    let url = this.reviewData;
    return this.http.get(url);

  }
  // post form data
  postReviewData(reviewData) {
    let url = this.reviewData
    return this.http.post(url, reviewData,
      { responseType: 'text' }
    )
  }

  // delete cutomer data by is
  delReviewDataById(id) {
    let url = this.reviewData;
    return this.http.delete(url + '/' + id, { responseType: 'text' });

  }
  // delete all customer data

  deleteAllReviewData() {
    let url = this.reviewData;
    return this.http.delete(url, { responseType: 'text' });

  }
  // updatedata
  updateReview(id, reviewData) {
    let url = this.reviewData;
    return this.http.put(url + '/' + id, reviewData, { responseType: 'text' })
  }










  // get image data 
  getImageData() {
    let url = this.imagedata
    return this.http.get(url, { responseType: 'json' });
  }

  // post image data
  postImageData(imagedata) {
    let url = this.imagedata
    return this.http.post(url, imagedata, { responseType: 'text' });
  }
  // deleteimaegdata by image data

  deleteImageDataById(id) {
    let url = this.imagedata;
    return this.http.delete(url + '/' + id, { responseType: 'text' });

  }
  // deelete all imagedata

  deleteImageData() {
    let url = this.imagedata;
    return this.http.delete(url, { responseType: 'text' });
  }

  // updatedata
  updateImage(id, imageData) {
    let url = this.imagedata;
    return this.http.put(url + '/' + id, imageData, { responseType: 'text' })
  }









  // videodata
  // get video data
  getVideoData() {
    let url = this.vidoedata
    return this.http.get(url);
  }
  // post video data
  postVideoData(videoData) {

    let url = this.vidoedata
    return this.http.post(url, videoData, { responseType: 'text' });
  }

  // delete video by id
  deleteVideoDataById(videoid) {
    let url = this.vidoedata;
    return this.http.delete(url + "/" + videoid, { responseType: 'text' });

  }
  // deelete all video

  deleteVideoData() {
    let url = this.vidoedata;
    return this.http.delete(url, { responseType: 'text' });
  }
  // updatedata
  updateVideo(id, videoData) {
    let url = this.vidoedata;
    return this.http.put(url + '/' + id, videoData, { responseType: 'text' })
  }







  // get adminadat
  getAdminData() {
    let url = this.admindata;
    return this.http.get(url);

  }
  // post form data
  postAdminData(adminData) {
    let url = this.admindata
    return this.http.post(url, adminData, { responseType: 'text' });
  }

  // delete cutomer data by is
  delAdmindataById(id) {
    let url = this.admindata;
    return this.http.delete(url + '/' + id, { responseType: 'text' });

  }
  // get login by id
  loginAdmin(data) {
    let url = this.loginData;
    return this.http.post(url, data);

  }


  // updatedata
  updateAdmin(id, adminData) {
    let url = this.admindata;
    return this.http.put(url + '/' + id, adminData, { responseType: 'text' })
  }

  // logindetails
  getLogin() {
    return !!sessionStorage.getItem('Token')
  }

  getToken() {
    return sessionStorage.getItem('Token')
  }




  // youtube api 

  // getyoutubeVideo() {
  //   let url = "https://www.googleapis.com/youtube/v3/search?key=" + this.apiKey + "& channelId=" + "UCwzKdn1qJmV48SC_7fEuS1A" + "&order=date&part=snippet &type=video,id&maxResults=" + "15"
  //   return this.http.get(url);
  // }

}
