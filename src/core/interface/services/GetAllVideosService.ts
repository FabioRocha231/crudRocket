import { Video } from "../../../entities";

export interface IGetAllVideosService {
  execute(): Promise<Video[]>;
}
