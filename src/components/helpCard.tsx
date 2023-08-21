import { Box, Typography } from '@mui/material';
import { blueBox } from 'style/resume';

interface Props {
  descriptions: string[];
}

const HelpCard = ({ descriptions }: Props) => {
  return (
    <Box css={blueBox}>
      {descriptions.map((description, index) => (
        <Typography key={`helpDescription_${index}`}>• {description}</Typography>
      ))}
    </Box>
  );
};

export default HelpCard;
