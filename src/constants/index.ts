export const THUMBNAIL_WIDTH = 1600;
export const THUMBNAIL_HEIGHT = 900;

export const TRIANGLE_WIDTH = 40;
export const TRIANGLE_GAP = TRIANGLE_WIDTH / 2;
export const TRIANGLE_MAX_HEIGHT = 3;
export const TRIANGLE_MIN_HEIGHT = 1;
export const TRIANGLE_DRAW_START_X = -TRIANGLE_WIDTH;
export const TRIANGLE_DRAW_START_Y = -TRIANGLE_WIDTH;
export const TRIANGLE_COUNT =
  (THUMBNAIL_WIDTH / TRIANGLE_WIDTH) * (THUMBNAIL_HEIGHT / TRIANGLE_WIDTH) * 2;

export const RGBA_ARRAY_SIZE = 4;

export const ROUTE_PATH = {
  HOME: "/",
  THUMBNAIL_RESULT: "thumbnail-result",
};
