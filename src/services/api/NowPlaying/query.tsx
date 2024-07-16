import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getNowPlaying } from './api'

export function useGetMovie(params: any, enabled?: boolean) {
  console.log(params)
  return useQuery({
    queryKey: ['get-movie'],
    queryFn: () => getNowPlaying(params).then(resp => resp.data),
    enabled: true,
  })
}
