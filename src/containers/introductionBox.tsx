import { Box, Grid, TextField } from '@mui/material';
import BoxHeader from 'component/boxHeader';
import HelpCard from 'component/helpCard';

const IntroductionBox = () => {
  return (
    <Grid item>
      <BoxHeader title="간단 소개글" />
      <HelpCard
        descriptions={['본인의 업무 경험을 기반으로 핵심역량과 업무 스킬을 간단히 작성해주세요.', '3~5줄로 요약하여 작성하는 것을 추천합니다!']}
      />
      <Box paddingTop={3}>
        <TextField
          variant="standard"
          rows={4}
          placeholder="간단한 자기소개를 통해 이력서를 돋보이게 만들어보세요. (3~5줄 권장)"
          multiline
          fullWidth
        />
      </Box>
    </Grid>
  );
};

export default IntroductionBox;
