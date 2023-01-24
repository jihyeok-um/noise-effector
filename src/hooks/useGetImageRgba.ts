import { useEffect, useRef, useState } from "react";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH, TRIANGLE_COUNT } from "../constants/triangle";
import { RGBA_ARRAY_SIZE } from "./../constants/triangle";

export const useGetImageRgba = () => {
  const componentArray = Array.from({ length: TRIANGLE_COUNT }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [rgba, setRgba] = useState<number[][] | null>(null);

  const createImageData = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current.getContext("2d", { willReadFrequently: true });
    canvas?.drawImage(imageRef.current, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

    return canvas?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
  };

  const createRgbaArray = (imageData: Uint8ClampedArray | undefined) => {
    if (!imageData) return;

    const rgbaArray = [];
    for (let i = 0; i < imageData.length; i += RGBA_ARRAY_SIZE) {
      rgbaArray.push(Array.from(imageData.slice(i, i + RGBA_ARRAY_SIZE)));
    }
    setRgba(rgbaArray);
  };

  useEffect(() => {
    createRgbaArray(createImageData());
  }, [canvasRef.current, imageRef.current]);

  return {
    componentArray,
    canvasRef,
    imageRef,
    rgba,
  };
};
