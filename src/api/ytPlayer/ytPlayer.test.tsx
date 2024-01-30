import {VIDEO_LIST} from "@/api/ytPlayer/videoList"
import YouTubeAPI from "@/api/ytPlayer/ytPlayer"

describe('Youtube Player', () => {
  it('should render correctly', () => {
    const ytList = YouTubeAPI.getStaticVideoList()

    expect(ytList).toBe(VIDEO_LIST)
  })
})
