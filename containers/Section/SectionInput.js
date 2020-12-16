import Input from '../../components/Input';
import SectionWrapper from './SectionWrapper';
import SectionContainer from './SectionContainer';

const SectionInput = () => (
  <section className='section__content flow'>
    <h2 className='section-heading1'>Inputs</h2>

    <SectionWrapper>
      <SectionContainer heading={''}>
        <Input />
      </SectionContainer>
    </SectionWrapper>
  </section>
);

export default SectionInput;
