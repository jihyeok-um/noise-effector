import styled from "styled-components";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/pointillism";

export const Pointillism = ({ canvasRef }: PointillismProps) => {
  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={1200} height={1200}></S.Canvas>
    </S.Container>
  );
};

interface PointillismProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const S = {
  Container: styled.div`
    position: relative;

    @media (max-width: 1600px) {
      width: 600px;
      height: 600px;
    }

    @media (max-width: 600px) {
      width: 100vw;
      height: 100vw;
    }
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,
};
