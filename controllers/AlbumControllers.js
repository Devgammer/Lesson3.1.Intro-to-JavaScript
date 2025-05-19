const BaseController = require("./BaseController");


class AlbumController extends BaseController {
  async getPhotos(albumId) {
    return await this.axiosInstance.get(`/albums/${albumId}/photos`);
  }   


 }

 module.exports = new AlbumController();