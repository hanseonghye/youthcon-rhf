import { Grid, TextField } from '@mui/material';
import DateInputField from 'component/dateInputField';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  careerIndex: number;
  index: number;
  remove: () => void;
}

const ProjectCard = () => {
  return (
    <Grid item xs={10}>
      <Grid item container>
        <Grid item container direction="row">
          <Grid item xs={11}>
            <TextField variant="standard" placeholder="주요 성과" fullWidth />
          </Grid>
          <Grid item xs={1}>
            <ClearIcon fontSize="small" />
          </Grid>
        </Grid>
        <DateInputField startYear="" startMonth="" endYear="" endMonth="" onChange={(fieldName, fieldValue) => null} required />
        <TextField variant="standard" placeholder="상세 업무 내용과 성과를 기입해주세요." fullWidth />
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
