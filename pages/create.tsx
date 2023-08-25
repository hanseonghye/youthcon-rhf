import { Grid, Typography, Stack, Container } from '@mui/material';
import IntroductionBox from 'container/introductionBox';
import CareerBox from 'container/careerBox';
import ProfileBox from 'container/profileBox';
import { resumeLayout } from 'style/resume';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TitleBox from 'container/titleBox';
import SkillBox from 'container/skillBox';
import { ResumeProps } from 'util/type';
import { useForm, FormProvider } from 'react-hook-form';
import FloatingBox from 'container/floatingBox';
import { defaultResumeData } from 'util/defaultData';

const Create = () => {
  const resumeForm = useForm<ResumeProps>({ mode: 'onChange', defaultValues: defaultResumeData });

  const MAX_COUNT = 400;

  const onSubmit = (data: ResumeProps) => {
    console.log(data);
  };

  const onError = (data: Record<string, any>) => {
    console.log(data);
  };

  return (
    <Container>
      <Grid item container direction="column" gap={5} css={resumeLayout}>
        <Grid item>
          <Stack className="tip1" direction="row" gap={1}>
            <InfoOutlinedIcon fontSize="small" />
            <Typography>🔪퇴를 위한 React Hook Form</Typography>
          </Stack>
        </Grid>
        <FormProvider {...resumeForm}>
          <form>
            <TitleBox />
            <ProfileBox />
            <IntroductionBox />
            <CareerBox />
            <SkillBox />
          </form>
        </FormProvider>
      </Grid>
      <FloatingBox submitTrigger={resumeForm.handleSubmit(onSubmit, onError)} count={(Math.min(0, MAX_COUNT) / MAX_COUNT) * 100} />
    </Container>
  );
};

export default Create;
