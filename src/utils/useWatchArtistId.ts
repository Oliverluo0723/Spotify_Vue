// utils/useWatchArtistId.ts
import { watch } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'

export function useWatchArtistId(
  route: RouteLocationNormalizedLoaded,
  callback: (artistId: string | undefined) => void,
) {
  watch(
    () => route.params.artistId as string | undefined,
    (newId) => {
      callback(newId)
    },
    { immediate: true },
  )
}
