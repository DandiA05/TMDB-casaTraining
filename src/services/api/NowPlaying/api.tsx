import satellite from '@services/satellite'

export function getNowPlaying(params: any) {
  return satellite.get(`/now_playing`, {
    params: params,
  })
}
