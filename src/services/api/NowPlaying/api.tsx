import satellite from '@services/satellite'

export function getNowPlaying(params: any) {
  console.log('object', params)
  return satellite.get(`/now_playing`, {
    params: params,
  })
}
