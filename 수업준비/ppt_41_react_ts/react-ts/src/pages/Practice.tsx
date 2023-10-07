/** @format */

import HeaderMenu from '../components/HeaderMenu';
import { Link } from 'react-router-dom';
export default function Practice() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <HeaderMenu />

        <Link to='calc'>계산기 만들기</Link>
        <Link to='matzip'>멤버 소개 페이지</Link>
      </div>
    </>
  );
}
