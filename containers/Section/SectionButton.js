import Button from '../../components/Button';
import {
  ButtonColors,
  ButtonSizes,
  ButtonVariants,
} from '../../components/Button/buttonTypes';
import SectionContainer from './SectionContainer';
import SectionWrapper from './SectionWrapper';

const SectionButton = () => (
  <section className='section__content flow'>
    <h1 className='section-heading1'>Buttons</h1>

    <SectionWrapper>
      <SectionContainer heading={'<Button />'}>
        <Button title='Default' />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'}>
        <Button title='Default' defaultHoverFocus />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button variant="outline" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          variant={ButtonVariants.OUTLINE}
        />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          variant={ButtonVariants.OUTLINE}
          primaryOutlineHoverFocus
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button variant="text" />'}>
        <Button title='Default' color='primary' variant='text' />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          variant={ButtonVariants.TEXT}
          primaryTextHoverFocus
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button disableShadow />'}>
        <Button title='Default' color={ButtonColors.PRIMARY} disabledShadow />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button disabled />'}>
        <Button title='Default' disabled />
      </SectionContainer>
      <SectionContainer heading={'<Button variant="text" disabled />'}>
        <Button title='Default' variant={ButtonVariants.TEXT} disabled />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button startIcon="local_grocery_store" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          startIcon='local_grocery_store'
        />
      </SectionContainer>
      <SectionContainer heading={'<Button endIcon="local_grocery_store" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          endIcon='local_grocery_store'
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button size="sm" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          size={ButtonSizes.SMALL}
        />
      </SectionContainer>
      <SectionContainer heading={'<Button size="md" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          size={ButtonSizes.MEDIUM}
        />
      </SectionContainer>
      <SectionContainer heading={'<Button size="lg" />'}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          size={ButtonSizes.LARGE}
        />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'<Button color="default" />'}>
        <Button title='Default' />
      </SectionContainer>
      <SectionContainer heading={'<Button color="primary" />'}>
        <Button title='Default' color={ButtonColors.PRIMARY} />
      </SectionContainer>
      <SectionContainer heading={'<Button color="secondary" />'}>
        <Button title='Default' color={ButtonColors.SECONDARY} />
      </SectionContainer>
      <SectionContainer heading={'<Button color="danger" />'}>
        <Button title='Default' color={ButtonColors.DANGER} />
      </SectionContainer>
    </SectionWrapper>

    <SectionWrapper>
      <SectionContainer heading={'&:hover, &:focus '}>
        <Button title='Default' defaultHoverFocus />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '}>
        <Button
          title='Default'
          color={ButtonColors.PRIMARY}
          primaryHoverFocus
        />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '}>
        <Button
          title='Default'
          color={ButtonColors.SECONDARY}
          secondaryHoverFocus
        />
      </SectionContainer>
      <SectionContainer heading={'&:hover, &:focus '}>
        <Button title='Default' color={ButtonColors.DANGER} dangerHoverFocus />
      </SectionContainer>
    </SectionWrapper>
  </section>
);

export default SectionButton;
