const BaseController = require("./BaseController");


class CommentControllers extends BaseController {
 
async getComment(commentId) {
    return await this.axiosInstance.get(`/posts/${commentId}/comments`);
  }


 }

 module.exports = new CommentControllers();