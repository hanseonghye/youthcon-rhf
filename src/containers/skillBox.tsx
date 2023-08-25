import { Chip, Grid, Stack, Typography } from '@mui/material';
import BoxHeader from 'component/boxHeader';
import HelpCard from 'component/helpCard';
import { skilBoxLayout } from 'style/resume';
import DoneIcon from '@mui/icons-material/Done';
import AddIcon from '@mui/icons-material/Add';

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
          <>
            {preferredSkills.map((skill, index) => (
              <Chip
                className="skillChip"
                variant={true ? 'filled' : 'outlined'}
                key={`preferredSkills_${index}`}
                label={skill.label}
                onClick={() => {
                  //이미 선택된 경우 빼고, 없을경우 추가
                }}
                icon={true ? <DoneIcon /> : <AddIcon />}
              />
            ))}
          </>
        </Stack>
      </Grid>
      {/*선택된 skills*/}
      {/*<Chip*/}
      {/*  className="skillChip"*/}
      {/*  variant="filled"*/}
      {/*  onClick={() => {*/}
      {/*    //  skills에서 빼기*/}
      {/*  }}*/}
      {/*  icon={<ClearIcon />}*/}
      {/*/>*/}
    </Grid>
  );
};

export default SkillBox;
