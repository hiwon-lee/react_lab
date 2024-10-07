import Content from './Content';
import Header from './Header';
import Footer from './Footer';

//  현재 isDark라는 애가 너무 많이 사용되고 있어
// 중간 component다.
export default function Page({ isDark, setIsDark }) {
  return (
    <div className="page">
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}
