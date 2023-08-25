import { Button, Grid, Stack } from '@mui/material';
import BoxHeader from 'component/boxHeader';
import HelpCard from 'component/helpCard';
import AddIcon from '@mui/icons-material/Add';
import CareerCard from 'container/careerCard';

const CareerBox = () => {
  return (
    <Grid item>
      <BoxHeader title="경력" />
      <HelpCard
        descriptions={[
          '담당하신 업무 중 우선순위가 높은 업무를 선별하여 최신순으로 작성해주세요.',
          '신입의 경우, 직무와 관련된 대외활동, 인턴, 계약직 경력 등이 있다면 작성해주세요.',
        ]}
      />
      <Stack display="block" paddingTop={1} spacing={5}>
        <Button variant="outlined" startIcon={<AddIcon />} sx={{ float: 'right' }}>
          추가하기
        </Button>
        <Stack spacing={1}>
          <CareerCard />
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CareerBox;
