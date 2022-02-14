import {Injectable} from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from "@nestjs/mongoose";
import {PostDocument, Post} from "./post.model";
import {PostDto} from "./dto/editPostDto";

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private PostModel: Model<PostDocument>) {
  }

  async create(data: Post) {
    return this.PostModel.create(data)
  }

  async findAll() {
    return this.PostModel.find()
  }

  async find(id: string) {
    return this.PostModel.findById(id)
  }

  async update(id: string, data: PostDto) {
    this.PostModel.findByIdAndUpdate(id, data)
  }

  async remove(id: string) {
    this.PostModel.findByIdAndDelete(id)
  }
}
