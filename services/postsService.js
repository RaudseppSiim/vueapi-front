import Service from "./service";

export default class PostsService extends Service {

  constructor(api){
    super(api);
    this.prefix= 'posts'
  }

}
