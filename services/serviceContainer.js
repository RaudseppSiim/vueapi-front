import PostsService from "./postsService";
import Service from "./service";

export default class ServiceContainer {
  constructor(api){
    this.service = new Service(api);
    this.posts = new PostsService(api);
  }
}
