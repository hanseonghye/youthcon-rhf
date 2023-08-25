import { Button, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material';
import { careerCardLayout } from 'style/resume';
import DateInputField from 'component/dateInputField';
import ProjectCard from 'container/projectCard';
import ClearIcon from '@mui/icons-material/Clear';
import { defaultProjectData } from 'util/defaultData';

interface Props {
  index: number;
  careerRemove: () => void;
}

const CareerCard = () => {
  return (
    <Grid item container direction="row" padding={3} css={careerCardLayout}>
      <Grid item container xs={3} direction="column">
        <Grid item>
          {/*재직 중 일 경우 종료일은 시작일 보다 빠를수 없다 ! 유효성 필요 */}
          <DateInputField startYear="" startMonth="" endYear="" endMonth="" onChange={(fieldName, fieldValue) => null} required />
        </Grid>
        <Grid item>
          <Stack direction="row" className="date">
            <Checkbox className="checker" />
            <Typography className="label">현재 재직중</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Grid item container xs={9}>
        <Grid item container direction="column">
          <Grid item>
            <Stack>
              <Grid item container>
                <Grid item xs={11}>
                  <TextField variant="standard" placeholder="회사명" inputProps={{ style: { fontSize: 20 } }} />
                </Grid>
                <Grid item xs={1}>
                  <ClearIcon />
                </Grid>
              </Grid>
              <Grid item>
                <TextField variant="standard" placeholder="부서명/직책" inputProps={{ style: { fontSize: 16 } }} />
              </Grid>
            </Stack>
          </Grid>
          <Grid item>
            <Button className="addProject">+ 주요 성과 추가</Button>
            <Stack gap={3}>
              <ProjectCard />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CareerCard;
