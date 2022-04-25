import { Video } from "../../../entities";

export interface VideoRequest {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}
export interface ICreateVideoService {
  execute({ name, description, duration, category_id }: VideoRequest): Promise<Video | Error>;
}
