import { ToTopButton } from './style'

export const ScrollTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ToTopButton onClick={scrollToTop} title='Ir ao Topo'>
      <img src="/top-arrow.png" alt="Ir pro Topo" />
    </ToTopButton>
  );
};
