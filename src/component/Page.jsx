import Content from './Content';
import Header from './Header';
import Footer from './Footer';

export default function Page({ isDark, setIsDark }) {
  return (
    <div>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}
