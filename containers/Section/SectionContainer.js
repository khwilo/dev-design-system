const SectionContainer = ({ children, heading }) => (
  <section>
    <h3 className='btn-label'>{heading}</h3>
    {children}
  </section>
);

export default SectionContainer;
