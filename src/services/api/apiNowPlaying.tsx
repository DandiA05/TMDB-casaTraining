'use server'

import satellite from '@services/satellite'

export const getNowPlaying = async (params?: any) => {
  let response = {}
  await satellite
    .get(`/now_playing`, {
      params: params,
    })
    .then(res => {
      response = { status: 'success', data: res }
    })
    .catch(error => {
      response = { status: 'error', data: error }
    })
    .finally(() => {})

  return response
}
