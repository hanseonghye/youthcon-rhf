## RHF 사용 방식

RHF의 Control, Controller를 import 합니다.

```typescript
import { Control, Controller } from 'react-hook-form';
```

사용할 컴포넌트에서 control을 props로 전달 받습니다.
```typescript
function ProfileBox ({
  control: Control<ResumeProps>
}) {
  ...
}
```

제어할 부분에 Controller를 선언합니다.  
규칙은 `rules`, 렌더링 컴포넌트는 `render`에 지정합니다.
```typescript
function ProfileBox ({
  control: Control<ResumeProps>
}) {
  return (
    <Grid item container direction="column">
      <Grid item>
        <Controller
          // control 지정
          control={control}
          name="profile.name"
          // 검사 규칙 지정
          rules={{ required: true, maxLength: { value: 10, message: '10글자 이하로 입력해주세요.' } }}
          // field, fieldState에 전달되는 값들 확인
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
        ...
      </Grid>
  )
} 
```

rules에 대한 자세한 설명..
```typescript
<Controller
  ...
  rules={{ required: true, maxLength: { value: 10, message: '10글자 이하로 입력해주세요.' } }}
  ...
</Controller>
```

render에 대한 자세한 설명
field
```typescript
<Controller
  ...
   render={({ field: { value, onChange }, ... }) => (
     <RenderingComponent />
   )}
  ...
</Controller>
...
```
fieldState
```typescript
<Controller
  ...
   render={({ ..., fieldState: { invalid, error } }) => (
     <RenderingComponent />
   )}
  ...
</Controller>
...
```
