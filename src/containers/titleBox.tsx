import { Grid, TextField } from '@mui/material';
import { Controller, Control } from 'react-hook-form';
import { ResumeProps } from 'util/type';

interface Props {
  control: Control<ResumeProps>;
}

const TitleBox = ({ control }: Props) => {
  return (
    <Grid item>
      <Controller
        control={control}
        name="title"
        render={({ field: { value, onChange } }) => (
          <TextField
            variant="standard"
            placeholder="이력서 제목(필수)"
            fullWidth
            inputProps={{
              style: {
                fontSize: 36,
              },
            }}
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Grid>
  );
};

export default TitleBox;
