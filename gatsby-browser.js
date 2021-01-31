import { wrapPageElement as wrap } from './src/root-wrapper'
export const wrapPageElement = wrap


export const onClientEntry = async () => {
    if (typeof IntersectionObserver === "undefined") {
      await import("intersection-observer")
    }
  }