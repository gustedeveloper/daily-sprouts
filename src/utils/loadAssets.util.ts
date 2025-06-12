import { allAssets } from './assetsToPreload'

export const loadAssets = async (): Promise<void> => {
  await Promise.all(
    allAssets.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = resolve
        }),
    ),
  )
}
