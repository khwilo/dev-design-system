import Input from '../../components/Input';
import SectionContainer from './SectionContainer';
import SectionContent from './SectionContent';
import SectionWrapper from './SectionWrapper';

const SectionInput = () => (
  <SectionContent contentTitle='Inputs'>
    <SectionWrapper>
      <SectionContainer heading={'<Input />'}>
        <Input id='input1' />
      </SectionContainer>
      <SectionContainer heading={'&:hover'} faintHeading>
        <Input id='input2' defaultHover />
      </SectionContainer>
      <SectionContainer heading={'&:focus'} faintHeading>
        <Input id='input3' defaultFocus />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Input error />'}>
        <Input id='input1' error />
      </SectionContainer>
      <SectionContainer heading={'&:hover'} faintHeading>
        <Input id='input2' error errorHover />
      </SectionContainer>
      <SectionContainer heading={'&:focus'} faintHeading>
        <Input id='input3' error />
      </SectionContainer>
    </SectionWrapper>
  </SectionContent>
);

export default SectionInput;
