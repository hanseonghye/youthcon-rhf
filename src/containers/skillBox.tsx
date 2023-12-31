import { Chip, Grid, Stack, Typography } from '@mui/material';
import BoxHeader from 'component/boxHeader';
import HelpCard from 'component/helpCard';
import { skilBoxLayout } from 'style/resume';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useFormContext } from 'react-hook-form';
import { ResumeProps } from 'util/type';

const preferredSkills = [
  { label: 'MySQL', key: 'mysql' },
  { label: 'Git', key: 'git' },
  { label: 'JavaScript', key: 'javascript' },
  { label: 'Java', key: 'java' },
  { label: 'AWS', key: 'aws' },
  { label: 'Spring Framework', key: 'spring_framework' },
  { label: 'Srping Boot', key: 'spring_boot' },
  { label: 'Docker', key: 'dockre' },
  { label: 'JPA', key: 'jpa' },
  { label: 'Giuhub', key: 'github' },
  { label: 'Python', key: 'python' },
];

const SkillBox = () => {
  const { control } = useFormContext<ResumeProps>();

  return (
    <Grid item css={skilBoxLayout}>
      <BoxHeader title="스킬" />
      <HelpCard
        descriptions={[
          '개발 스택, 디자인 툴, 마케팅 툴 등 가지고 있는 직무와 관련된 스킬을 추가해보세요.',
          ' 데이터 분석 툴이나 협업 툴 등의 사용해본 경험이 있으신 툴들도 추가해보세요',
        ]}
      />
      <Grid item className="skills" gap={2}>
        <Typography color="#333" fontSize={13} fontWeight={500}>
          같은 직무의 서류 합격 이력서에서 많이 사용된 스킬입니다. 스킬을 추가해보세요!
        </Typography>
        <Stack direction="row" display="block">
          <Controller
            control={control}
            name="skills"
            render={({ field: { value, onChange } }) => (
              <>
                {preferredSkills.map((skill, index) => (
                  <Chip
                    className="skillChip"
                    variant={value.findIndex((v) => v.key === skill.key) > -1 ? 'filled' : 'outlined'}
                    key={`preferredSkills_${index}`}
                    label={skill.label}
                    onClick={() => {
                      if (value.findIndex((v) => v.key === skill.key) > -1) onChange(value.filter((value) => value.key !== skill.key));
                      else onChange([...value, { ...skill }]);
                    }}
                    icon={value.findIndex((v) => v.key === skill.key) > -1 ? <DoneIcon /> : <AddIcon />}
                  />
                ))}
              </>
            )}
          />
        </Stack>
      </Grid>
      <Controller
        control={control}
        name="skills"
        render={({ field: { value, onChange } }) => (
          <>
            {value.map((skill, index) => (
              <Chip
                className="skillChip"
                variant="filled"
                key={`choicedSkills_${index}`}
                label={skill.label}
                onClick={() => {
                  onChange(value.filter((value) => value.key !== skill.key));
                }}
                icon={<ClearIcon />}
              />
            ))}
          </>
        )}
      />
    </Grid>
  );
};

export default SkillBox;
