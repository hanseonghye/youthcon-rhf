import { Divider, Stack, Typography } from '@mui/material';

interface Props {
  title: string;
}

const BoxHeader = ({ title }: Props) => {
  return (
    <Stack paddingBottom={1.5} gap={1}>
      <Typography fontSize={18}>{title}</Typography>
      <Divider variant="fullWidth" />
    </Stack>
  );
};

export default BoxHeader;
