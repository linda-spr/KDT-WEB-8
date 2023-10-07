/** @format */

import { SetStateAction } from 'react';
import styled from 'styled-components';

const PHeader = styled.header`
  background-color: beige;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

interface TextProps {
  onClick: () => void;
  txtColor?: boolean;
}
const Div = styled.div<TextProps>`
  width: 30%;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 461px) {
    font-size: 1.5rem;
  }
  &:hover {
    color: #ffb1b1;
  }

  /* components props */
  color: ${(props: TextProps): string => (props.txtColor ? 'red' : 'black')};
`;
interface Props {
  setMapo: React.Dispatch<SetStateAction<boolean>>;
  setGangdong: React.Dispatch<SetStateAction<boolean>>;
  setDobong: React.Dispatch<SetStateAction<boolean>>;
  mapo: boolean;
  dobong: boolean;
  gangdong: boolean;
}
export default function Header(props: Props) {
  const { setMapo, setGangdong, setDobong, mapo, dobong, gangdong } = props;
  function setState(state: boolean, func: React.Dispatch<SetStateAction<boolean>>): void {
    setGangdong(false);
    setDobong(false);
    setMapo(false);
    func(true);
  }
  return (
    <>
      <PHeader>
        <Div
          onClick={() => {
            setState(gangdong, setGangdong);
          }}
          txtColor={gangdong}>
          강동구
        </Div>
        <Div
          onClick={() => {
            setState(mapo, setMapo);
          }}
          txtColor={mapo}>
          마포구
        </Div>
        <Div
          onClick={() => {
            setState(dobong, setDobong);
          }}
          txtColor={dobong}>
          도봉구
        </Div>
      </PHeader>
    </>
  );
}
