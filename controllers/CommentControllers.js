const BaseController = require("./BaseController");


class CommentController extends BaseController {
 
async getComment(commentId) {
    return await this.axiosInstance.get(`/posts/${commentId}/comments`);
  }


 }

 module.exports = new CommentController();