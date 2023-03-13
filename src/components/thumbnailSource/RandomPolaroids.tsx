import { motion } from "framer-motion";
import styled from "styled-components";
import { randomInt } from "../../utils/randomInt";
import { photos } from "../../constants/photos";
import { Polaroid } from "./Polaroid";
import { Styles } from "../../styles/Styles";

export const RandomPolaroids = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <S.Container>
      {photos.map((photo) => {
        const randomCoord = { x: randomInt(width), y: randomInt(height) };
        const randomRotate = randomInt(45, -45);

        return (
          <motion.div
            key={photo}
            initial={{ scale: 0.8, x: randomCoord.x, y: randomCoord.y, rotate: randomRotate }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            drag
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
          >
            <Polaroid src={photo} alt="베경 폴라로이드" />
          </motion.div>
        );
      })}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FullWidthAndHeight}
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  `,
};
