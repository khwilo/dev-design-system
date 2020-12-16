const SectionContent = ({ children, contentTitle }) => (
  <section className='section section--content flow'>
    <h2 className='section__heading'>{contentTitle}</h2>
    <>{children}</>
  </section>
);

export default SectionContent;
