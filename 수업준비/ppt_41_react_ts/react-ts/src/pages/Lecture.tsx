/** @format */

import HeaderMenu from '../components/HeaderMenu';
import Count from '../components/lecture/Count';
import EventObj from '../components/lecture/EventObj';
import { PropsType1, PropsType2, PropsType3 } from '../components/lecture/PropsType';
import SetText from '../components/lecture/SetText';

export default function Lecture() {
  return (
    <>
      <HeaderMenu />

      <PropsType1 name='allie' />

      <PropsType2 height='100px' color='skyblue' width='100px' />
      <PropsType3 width={100} height={100} text='안녕하세요' />

      <Count />
      <SetText />
      <EventObj />
    </>
  );
}
