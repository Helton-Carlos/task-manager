import { useBreakpoints as vueUseBreakpoints } from "@vueuse/core";

export function useBreakpoints() {
  const breakpoints = vueUseBreakpoints({
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  });

  return {
    breakpoints,
    sm: breakpoints.greaterOrEqual("sm"),
    md: breakpoints.smaller("md"),
    lg: breakpoints.greaterOrEqual("lg"),
    greaterOrEqual: breakpoints.greaterOrEqual,
    smaller: breakpoints.smaller,
  };
}
