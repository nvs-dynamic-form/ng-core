export type ScreenSizeType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IScreenSize {
  desktop: ScreenSizeType;
  mobile?: ScreenSizeType;
  tablet?: ScreenSizeType;
}
