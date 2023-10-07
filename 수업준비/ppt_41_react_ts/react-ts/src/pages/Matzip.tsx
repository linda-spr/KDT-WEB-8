/** @format */

import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import Card from '../components/practice/matzip/Card';
import Header from '../components/practice/matzip/Header';
import { useState } from 'react';
import { MatzipForm } from '../utils/commonInterface';

const Inner = styled.div`
  max-width: 1000px;
  background-color: #ddf5ff;
  margin: auto;
  padding: 1rem 0.5rem;
  /* display: flex;
  justify-content: space-around;
  flex-wrap: wrap; */

  /* 다음 페이지 ? 구현 한다면, */
  cursor: pointer;
`;

const GridDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
`;
export default function Member() {
  const [gangdong, setGangdong] = useState<boolean>(false);
  const [mapo, setMapo] = useState<boolean>(false);
  const [dobong, setDobong] = useState<boolean>(false);

  const mapoArr: MatzipForm[] = [
    { imgSrc: '/assets/을밀대.webp', title: '을밀대', desc: '~~~~~설명 어쩌구 주절주절', idx: 1 },
    { imgSrc: '/assets/수퍼.jpg', title: '수퍼', desc: '설명어쩌구2', idx: 2 },
    { imgSrc: '/assets/옴레스토랑.jpg', title: '옴레스토랑', desc: '설명어쩌구3', idx: 3 },
    { imgSrc: '/assets/한강껍데기.jpg', title: '한강껍데기', desc: '설명어쩌구4', idx: 4 },
    { imgSrc: '/assets/마포갈매기.jpg', title: '마포갈매기', desc: '설명어쩌구5', idx: 5 },
    { imgSrc: '/assets/소점.jpg', title: '소점', desc: '설명어쩌구7', idx: 6 },
  ];

  const gangdongArr: MatzipForm[] = [
    { imgSrc: '', title: '봉평 메밀촌', desc: '~~~~~설명 어쩌구 주절주절', idx: 1 },
    { imgSrc: '', title: '아바이순대', desc: '설명어쩌구2', idx: 2 },
    { imgSrc: '', title: '서울육개장 짚불고기', desc: '설명어쩌구2', idx: 3 },
    { imgSrc: '', title: '셀프하우스', desc: '설명어쩌구2', idx: 4 },
    { imgSrc: '', title: '호치민', desc: '설명어쩌구2', idx: 5 },
    { imgSrc: '', title: '평양만두집', desc: '설명어쩌구2', idx: 6 },
  ];

  const dobongArr: MatzipForm[] = [
    { imgSrc: '', title: '마쯔무라 돈까스', desc: '~~~~~설명 어쩌구 주절주절', idx: 1 },
    { imgSrc: '', title: '하누소', desc: '설명어쩌구2', idx: 2 },
    { imgSrc: '', title: '판다쓰', desc: '설명어쩌구2', idx: 3 },
    { imgSrc: '', title: '옹기꽃게장', desc: '설명어쩌구2', idx: 4 },
    { imgSrc: '', title: '호호분식', desc: '설명어쩌구2', idx: 4 },
  ];
  return (
    <>
      <GlobalStyle />
      <Header setDobong={setDobong} setGangdong={setGangdong} setMapo={setMapo} mapo={mapo} dobong={dobong} gangdong={gangdong} />
      <Inner>
        <GridDiv>
          {/* <div className='bg-primary'>맛집 소개</div> */}
          {mapo &&
            mapoArr.map((el) => {
              return (
                <>
                  <Card imgSrc={el.imgSrc} title={el.title} desc={el.desc} key={el.idx} />
                </>
              );
            })}
          {dobong &&
            dobongArr.map((el) => {
              return (
                <>
                  <Card imgSrc={el.imgSrc} title={el.title} desc={el.desc} key={el.idx} />
                </>
              );
            })}
          {gangdong &&
            gangdongArr.map((el) => {
              return (
                <>
                  <Card imgSrc={el.imgSrc} title={el.title} desc={el.desc} key={el.idx} />
                </>
              );
            })}
        </GridDiv>
        {!gangdong && !dobong && !mapo && (
          <h1 style={{ textAlign: 'center', width: '100%' }}>
            메인페이지에 어서오세요?! <br />
          </h1>
        )}
      </Inner>
    </>
  );
}
