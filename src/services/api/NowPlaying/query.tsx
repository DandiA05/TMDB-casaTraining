import { useQuery } from '@tanstack/react-query'
import { getNowPlaying } from './api'

export function useGetMovie(params: any) {
  return useQuery({
    queryKey: ['get-movie'],
    queryFn: () => getNowPlaying(params).then(resp => resp.data),
    enabled: true,
  })
}
