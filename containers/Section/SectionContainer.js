const SectionContainer = ({ children, heading, faintHeading }) => (
  <section className='section__container'>
    <h3 className='section__label' style={{ color: faintHeading && '#828282' }}>
      {heading}
    </h3>
    {children}
  </section>
);

export default SectionContainer;
