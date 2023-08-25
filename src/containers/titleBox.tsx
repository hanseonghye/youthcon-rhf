import { Grid, TextField } from '@mui/material';

const TitleBox = () => {
  return (
    <Grid item paddingBottom={5}>
      <TextField
        variant="standard"
        placeholder="이력서 제목(필수)"
        fullWidth
        inputProps={{
          style: {
            fontSize: 36,
          },
        }}
      />
    </Grid>
  );
};

export default TitleBox;
