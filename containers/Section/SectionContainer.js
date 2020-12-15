const SectionContainer = ({ children, heading }) => (
  <section className='section__container'>
    <h3 className='btn-label'>{heading}</h3>
    {children}
  </section>
);

export default SectionContainer;
