const BaseController = require("./BaseController");


class NewControllers extends BaseController {
  async getPhotos(albumId) {
    return await this.axiosInstance.get(`/albums/${albumId}/photos`);
  }   

async getComment(commentId) {
    return await this.axiosInstance.get(`/posts/${commentId}/comments`);
  }


 }

 module.exports = new NewControllers();