import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DownloadButton } from "../components/DownloadButton";
import { Pointillism } from "../components/Pointillism";
import { usePointillism } from "../hooks/usePointillism";
import { Styles } from "../styles/Styles";

export const ThumbnailResult = () => {
  const [searchParams] = useSearchParams();
  const thumbnailSource = searchParams.get("thumbnail-source");
  const { canvasRef, canvasStatus } = usePointillism(thumbnailSource!);

  return (
    <S.Container>
      <Pointillism canvasRef={canvasRef} />
      <DownloadButton canvasRef={canvasRef} canvasStatus={canvasStatus} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    flex-direction: column;
    gap: 20px;
  `,
};
