import { Button, Grid, Stack } from '@mui/material';
import BoxHeader from 'component/boxHeader';
import HelpCard from 'component/helpCard';
import { Control, useFieldArray } from 'react-hook-form';
import { ResumeProps } from 'util/type';
import AddIcon from '@mui/icons-material/Add';
import { defaultCareerData } from 'util/defaultData';
import CareerCard from 'container/careerCard';

interface Props {
  control: Control<ResumeProps>;
}

const CareerBox = ({ control }: Props) => {
  const { fields, append, remove } = useFieldArray<ResumeProps>({ control, name: 'careers' });

  return (
    <Grid item>
      <BoxHeader title="경력" />
      <HelpCard
        descriptions={[
          '담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요.',
          '신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요.',
          '업무 또는 활동 시 담당했던 역할과 과정, 성과에 대해 자세히 작성해주세요.',
          '업무 성과는 되도록 구체적인 숫자 혹은 [%]로 표현해주세요!',
          '커리어 조회 후 기업명이 실제와 다른 경우, 부서명/직책 란에 원하시는 기업명을 작성해주세요.',
        ]}
      />
      <Stack display="block" paddingTop={1} spacing={5}>
        <Button variant="outlined" startIcon={<AddIcon />} onClick={() => append(defaultCareerData)} sx={{ float: 'right' }}>
          추가하기
        </Button>
        <Stack spacing={1}>
          {fields.map((field, index) => (
            <CareerCard index={index} control={control} key={field.id} remove={() => remove(index)} />
          ))}
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CareerBox;
