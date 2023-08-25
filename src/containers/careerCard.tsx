import { Button, Checkbox, Grid, Stack, TextField, Typography } from '@mui/material';
import { careerCardLayout } from 'style/resume';
import DateInputField from 'component/dateInputField';
import ProjectCard from 'container/projectCard';
import { Controller, useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { ResumeProps } from 'util/type';
import ClearIcon from '@mui/icons-material/Clear';
import { defaultProjectData } from 'util/defaultData';

interface Props {
  index: number;
  careerRemove: () => void;
}

const CareerCard = ({ index, careerRemove }: Props) => {
  const { control } = useFormContext<ResumeProps>();
  const { fields, append, remove } = useFieldArray<ResumeProps>({
    control,
    name: `careers.${index}.projects`,
  });
  const isCurrentWorking = useWatch({ control, name: `careers.${index}.isCurrent` });

  return (
    <Grid item container direction="row" padding={3} css={careerCardLayout}>
      <Grid item container xs={3} direction="column">
        <Grid item>
          <Controller
            control={control}
            name={`careers.${index}.date`}
            rules={{
              required: true,
              validate: (value) => {
                if (!isCurrentWorking)
                  if (value.startYear && value.endYear) {
                    if (Number(value.startYear) > Number(value.endYear)) return '종료일은 시작일보다 빠를 수 없습니다';
                    if (value.startMonth && value.endMonth)
                      if (Number(value.startYear) === Number(value.endYear) && Number(value.startMonth) > Number(value.endMonth))
                        return '종료일은 시작일보다 빠를 수 없습니다';
                  }

                return true;
              },
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <DateInputField
                  startYear={value.startYear}
                  startMonth={value.startMonth}
                  endYear={value.endYear}
                  endMonth={value.endMonth}
                  onChange={(fieldName, fieldValue) => onChange({ ...value, [fieldName]: fieldValue })}
                  disableEndDate={isCurrentWorking}
                  required
                />
                {error && (
                  <Typography color="red" fontSize={12}>
                    {error.message}
                  </Typography>
                )}
              </>
            )}
          />
        </Grid>
        <Grid item>
          <Stack direction="row" className="date">
            <Controller
              control={control}
              name={`careers.${index}.isCurrent`}
              render={({ field: { value, onChange } }) => <Checkbox className="checker" checked={value} onChange={onChange} />}
            />
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
                  <Controller
                    control={control}
                    name={`careers.${index}.companyName`}
                    render={({ field: { value, onChange } }) => (
                      <TextField variant="standard" value={value} onChange={onChange} placeholder="회사명" inputProps={{ style: { fontSize: 20 } }} />
                    )}
                  />
                </Grid>
                <Grid item xs={1}>
                  <ClearIcon onClick={careerRemove} />
                </Grid>
              </Grid>
              <Grid item>
                <Controller
                  control={control}
                  name={`careers.${index}.department`}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      variant="standard"
                      value={value}
                      onChange={onChange}
                      placeholder="부서명/직책"
                      inputProps={{ style: { fontSize: 16 } }}
                    />
                  )}
                />
              </Grid>
            </Stack>
          </Grid>
          <Grid item>
            <Button className="addProject" onClick={() => append(defaultProjectData)}>
              + 주요 성과 추가
            </Button>
            <Stack gap={3}>
              {fields.map((field, projectIndex) => (
                <ProjectCard key={field.id} careerIndex={index} index={projectIndex} remove={() => remove(projectIndex)} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CareerCard;
