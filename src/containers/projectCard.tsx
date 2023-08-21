import { Grid, TextField } from '@mui/material';
import DateInputField from 'component/dateInputField';
import { Controller, Control } from 'react-hook-form';
import { ResumeProps } from 'util/type';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  careerIndex: number;
  index: number;
  control: Control<ResumeProps>;
  remove: () => void;
}

const ProjectCard = ({ careerIndex, index, control, remove }: Props) => {
  return (
    <Grid item xs={10}>
      <Grid item container>
        <Grid item container direction="row">
          <Grid item xs={11}>
            <Controller
              control={control}
              name={`careers.${careerIndex}.projects.${index}.title`}
              render={({ field: { value, onChange } }) => (
                <TextField variant="standard" placeholder="주요 성과" value={value} onChange={onChange} fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={1}>
            <ClearIcon fontSize="small" onClick={remove} />
          </Grid>
        </Grid>
        <Controller
          control={control}
          name={`careers.${careerIndex}.projects.${index}.date`}
          render={({ field: { value, onChange } }) => (
            <DateInputField
              startYear={value.startYear}
              startMonth={value.startMonth}
              endYear={value.endYear}
              endMonth={value.endMonth}
              onChange={(fieldName, fieldValue) => onChange({ ...value, [fieldName]: fieldValue })}
              required
            />
          )}
        />
        <Controller
          control={control}
          name={`careers.${careerIndex}.projects.${index}.description`}
          render={({ field: { value, onChange } }) => (
            <TextField variant="standard" placeholder="상세 업무 내용과 성과를 기입해주세요." value={value} onChange={onChange} fullWidth />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default ProjectCard;
