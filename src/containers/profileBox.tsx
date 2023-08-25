import { Grid, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

const ProfileBox = () => {
  const { control } = useFormContext();

  return (
    <Grid item container direction="column" paddingBottom={5}>
      <Grid item>
        <Controller
          control={control}
          name="profile.name"
          rules={{ required: true, maxLength: { value: 10, message: '10글자 이하로 입력해주세요.' } }}
          render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
            <TextField
              variant="standard"
              placeholder="이름 (필수)"
              value={value}
              onChange={onChange}
              error={!!(value && invalid)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          control={control}
          name="profile.email"
          rules={{
            required: true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식을 확인해주세요.',
            },
          }}
          render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
            <TextField
              variant="standard"
              placeholder="이메일 (필수)"
              value={value}
              onChange={onChange}
              error={!!(value && invalid)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />
      </Grid>
      <Grid item>
        <Controller
          control={control}
          name="profile.phone"
          rules={{
            required: true,
            validate: (value) => {
              const regex = /\d{3}-\d{3,4}-\d{4}/;
              if (!regex.test(value)) return '연락처 형식을 확인해주세요.';

              return true;
            },
          }}
          render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
            <TextField
              variant="standard"
              placeholder="연락처(필수) ex) 010-0000-0000"
              value={value}
              onChange={onChange}
              error={!!(value && invalid)}
              helperText={error?.message}
              fullWidth
            />
          )}
        />
      </Grid>
    </Grid>
  );
};

export default ProfileBox;
