import { VIDEO_LIST } from "@/api/ytPlayer/videoList"

class YouTubeAPI {
  public getStaticVideoList = () => VIDEO_LIST
}

export default new YouTubeAPI()
