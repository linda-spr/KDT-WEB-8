/** @format */

import styled from 'styled-components';
import { MatzipForm } from '../../../utils/commonInterface';
import { useNavigate } from 'react-router-dom';

/** @format */
const CardDiv = styled.div`
  width: 240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px rgb(180, 180, 180, 0.4);
  text-align: center;
  border-radius: 10px;
  @media screen and (max-width: 840px) {
    width: 200px;
    height: 280px;
  }
  @media screen and (max-width: 720px) {
    width: 180px;
    height: 255px;
  }
`;
interface divProps {
  src: string;
}
const ImgDiv = styled.div<divProps>`
  width: 80%;
  height: 150px;
  border: 1px solid #777;
  margin: 1rem auto;
  /* background-image: url('../../../assets/을밀대.webp'); */
  background-position: center;
  background-size: cover;
  background-image: url(${(props: divProps) => `${props.src}`});
`;

const DescP = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  margin-top: 0.5rem;
  font-size: 14px;
`;

export default function Card({ imgSrc, title, desc }: MatzipForm) {
  const navi = useNavigate();
  return (
    <>
      <CardDiv
        onClick={() => {
          navi(`${title}`);
        }}>
        <ImgDiv src={imgSrc} />
        <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginTop: '12px' }}>{title}</h3>
        <DescP>{desc}</DescP>
      </CardDiv>
    </>
  );
}
