import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

//  현재 isDark라는 애가 너무 많이 사용되고 있어
// 중간 component다.(isDark를 사용하지 않음)
export default function Page() {
  // 이렇게 컨텍스트를 받아올 수 있다. (app.jsx에서 provider로 넘긴 값이..)
  //   const data = useContext(ThemeContext);

  return (
    <div className="page">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
