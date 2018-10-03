import React from 'react';
import { Platform } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'rn-fetch-blob'
import RNFirebase from 'react-native-firebase'
import uuid from 'uuid'


const uploadImage = (uri, rootPath, secondRoot, type, mime = 'image/jpeg') => {
  return new Promise((resolve, reject) => {
    const uploadUri =  uri
    var split = uri.split(".")
    const filetype = split[split.length - 1];
    let uploadBlob = null

    const imageRef = RNFirebase.storage().ref(rootPath + "/" + secondRoot + "/" + type).child(uuid.v5() + "." + filetype)

    fs.readFile(uploadUri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
  })
}

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs

var options = {
  title: 'Select image',
};

export default class ImageUploader {
  constructor() {

  }
  imagePath = "";
  uploadByPath(path, pageId, rootPath, type) {
    uploadImage(path, pageId, rootPath, type)
      .then(url => { alert('uploaded'); })
      .catch(error => console.log(error))
  }

}