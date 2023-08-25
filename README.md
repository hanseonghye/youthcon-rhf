# 🔪퇴를 위한 React Hook Form


### ✅ Before Start

#### 0. node.js 가 설치 되어있는지 확인해주세요.
` node -v`

#### 1. install package
` yarn install`

#### 2. running dev mode
` yarn dev`

localhost:3000 으로 접속해 보세요 !



### ✅ 개발 환경
- typescript
- next.js

- mui/material ui
- emotion

- react-hook-form ❤️


### ✅ 우리가 구현할 폼 타입은 !
```typescript
export interface ResumeProps {
  title: string;
  profile: ProfileProps;
  introduction: string;
  careers: CareerProps[];
  skills: { key: string; label: string }[];
}

export interface ProfileProps {
  name: string;
  email: string;
  phone: string;
}

export interface CareerProps {
  date: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  isCurrent: boolean;
  companyName: string;
  department: string;
  projects: ProjectProps[];
}

export interface ProjectProps {
  title: string;
  date: {
    startYear: string;
    startMonth: string;
    endYear: string;
    endMonth: string;
  };
  description: string;
}

```


### ✅ RHF의 Control & Controller 를 사용할 거예요
```typescript

import { Control, Controller } from 'react-hook-form';

  const { control } = useForm();

  <Controller
    //우리가 사용할 form의 control을 넘겨줘요.
    control={control}
    //form에서 사용할 key
    name="name"
    //유효성 체크
    rules={{ required: true, maxLength: { value: 10, message: '10글자 이하로 입력해주세요.' } }}
    //렌더링 부분
    render={({ field: { value, onChange }, fieldState: { invalid, error } }) => (
      <TextField
        variant="standard"
        placeholder="이름 (필수)"
        value={value}
        onChange={onChange}
        error={invalid}
        helperText={error?.message}
        fullWidth
      />
    )}


```
