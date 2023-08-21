import { Box, Grid, Button, Typography, LinearProgress } from '@mui/material';
import { floatingButton } from 'style/resume';

interface Props {
  count: number;
  submitTrigger: () => void;
}
const FloatingBox = ({ count, submitTrigger }: Props) => {
  const submit = () => {
    submitTrigger();
  };

  return (
    <Box css={floatingButton}>
      <Grid item container className="content">
        <Grid item container xs={10} direction="row" spacing={2}>
          <Grid item xs={2}>
            <LinearProgress variant="determinate" value={count} />
          </Grid>
          <Grid item xs={10}>
            <Typography fontSize={15}>💪 개발 직군, 1년차 지원자들은 최소 400자 정도 작성했어요.</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" size="large" onClick={submit}>
            작성 완료
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FloatingBox;
