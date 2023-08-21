import { Grid, Typography, Stack, Container } from '@mui/material';
import IntroductionBox from 'container/introductionBox';
import CareerBox from 'container/careerBox';
import ProfileBox from 'container/profileBox';
import { resumeLayout } from 'style/resume';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TitleBox from 'container/titleBox';
import SkillBox from 'container/skillBox';
import { ResumeProps } from 'util/type';
import { useForm } from 'react-hook-form';
import FloatingBox from 'container/floatingBox';
import { defaultResumeData } from 'util/defaultData';
import { useEffect, useState } from 'react';

const Create = () => {
  const { control, watch, handleSubmit, getValues } = useForm<ResumeProps>({ mode: 'onChange', defaultValues: defaultResumeData });
  const [valueCount, setValueCount] = useState(0);
  const watchedFields = watch();

  const MAX_COUNT = 400;

  const onSubmit = (data: ResumeProps) => {
    console.log(data);
  };

  const onError = (data: Record<string, any>) => {
    console.log(data);
  };

  useEffect(() => {
    const count = countCharactersRecursively(getValues());
    setValueCount(count);
  }, [watchedFields]);

  const countCharactersRecursively = (value: any) => {
    if (typeof value === 'string') {
      return value.length;
    } else if (Array.isArray(value)) {
      let totalCharacters = 0;
      for (const item of value) {
        totalCharacters += countCharactersRecursively(item);
        if (totalCharacters > MAX_COUNT) break;
      }

      return totalCharacters;
    } else if (typeof value === 'object' && value !== null) {
      let totalCharacters = 0;
      for (const key in value)
        if (key in value) {
          totalCharacters += countCharactersRecursively(value[key]);
          if (totalCharacters > MAX_COUNT) break;
        }

      return totalCharacters;
    }
    return 0;
  };

  return (
    <Container>
      <Grid item container direction="column" gap={5} css={resumeLayout}>
        <Grid item>
          <Stack className="tip1" direction="row" gap={1}>
            <InfoOutlinedIcon fontSize="small" />
            <Typography>블라블라 무슨 문구를 넣을까요</Typography>
          </Stack>
        </Grid>
        <TitleBox control={control} />
        <ProfileBox control={control} />
        <IntroductionBox control={control} />
        <CareerBox control={control} />
        <SkillBox control={control} />
      </Grid>
      <FloatingBox submitTrigger={handleSubmit(onSubmit, onError)} count={(Math.min(valueCount, MAX_COUNT) / MAX_COUNT) * 100} />
    </Container>
  );
};

export default Create;
