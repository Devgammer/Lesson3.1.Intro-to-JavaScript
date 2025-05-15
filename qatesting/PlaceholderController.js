const BaseController = require("./BaseController");

class PlaceholderController extends BaseController {
  async getAllPosts() {
    return await this.axiosInstance.get("/posts/");
  }

  async addPost(title, body, userId) {
    const newPost = {
      title: "New Post",
      body: "bar",
      userId: 1,
    };
    return await this.axiosInstance.post("/posts/", newPost);
  }

async getPost(id) {
 return await this.axiosInstance.get(`posts/${id}`);
    
  }
}


module.exports = new PlaceholderController();