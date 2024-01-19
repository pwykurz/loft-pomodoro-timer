// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

const OPTIONS = {
  part: 'snippet',
  maxResults: 25,
  key: 'AIzaSyDcEiyqWbHBUBqocZ_mQYElg59M73yoOY0',
  q: 'chill loft',
  kind: 'video',

}

class YouTubeAPI {
  private optionHandler = () => {
    const keyValueArr = Object.entries(OPTIONS)
    const optionsString = keyValueArr.map((value) => `${value[0]}=${value[1]}`)
    return optionsString.join('&')
  }

  public getVideoList = async () => {
    const res = await fetch(`https://www.googleapis.com/youtube/v3/search?${this.optionHandler()}`)
    return res.json()
  }
}

export default new YouTubeAPI()
