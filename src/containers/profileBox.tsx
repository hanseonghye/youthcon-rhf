import { Grid, TextField } from '@mui/material';

const ProfileBox = () => {
  return (
    <Grid item container direction="column" paddingBottom={5}>
      <Grid item>
        <TextField variant="standard" placeholder="이름 (필수)" error={false} helperText="" fullWidth />
      </Grid>
      <Grid item>
        {/*정규식 : /\S+@\S+\.\S+/,*/}
        <TextField variant="standard" placeholder="이메일 (필수)" error={false} helperText="" fullWidth />
      </Grid>
      <Grid item>
        {/*정규식 : const regex = /\d{3}-\d{3,4}-\d{4}/; */}
        <TextField variant="standard" placeholder="연락처(필수) ex) 010-0000-0000" error={false} helperText="" fullWidth />
      </Grid>
    </Grid>
  );
};

export default ProfileBox;
