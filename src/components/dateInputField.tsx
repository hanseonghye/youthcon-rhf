import { Stack, TextField, Typography } from '@mui/material';
import { dateFieldLayout } from 'style/inputField';
import { RequiredIcon } from 'component/icons';

interface Props {
  startYear: string;
  startMonth: string;
  endYear: string;
  endMonth: string;
  onChange: (key: string, value: string) => void;
  required?: boolean;
  disableEndDate?: boolean;
}

const DateInputField = ({ startYear, startMonth, endYear, endMonth, onChange, disableEndDate = false, required = false }: Props) => {
  const handleChange = (field: string, value: string) => {
    const regex = /^[0-9\b]+$/;
    if (value && !regex.test(value)) return;

    onChange(field, value);
  };

  return (
    <Stack direction="row" gap={1} css={dateFieldLayout}>
      <TextField
        placeholder="YYYY"
        variant="standard"
        value={startYear}
        inputProps={{ style: { width: '45px' }, maxLength: 4 }}
        onChange={(e) => handleChange('startYear', e.target.value)}
      />
      <Typography className="divider">.</Typography>
      <TextField
        placeholder="MM"
        variant="standard"
        value={startMonth}
        inputProps={{ style: { width: '27px' }, maxLength: 2 }}
        onChange={(e) => handleChange('startMonth', e.target.value)}
      />
      {!disableEndDate && (
        <>
          <Typography className="hyphen">-</Typography>
          <TextField
            placeholder="YYYY"
            variant="standard"
            value={endYear}
            inputProps={{ style: { width: '45px' }, maxLength: 4 }}
            onChange={(e) => handleChange('endYear', e.target.value)}
          />
          <Typography className="divider">.</Typography>
          <TextField
            placeholder="MM"
            variant="standard"
            value={endMonth}
            inputProps={{ style: { width: '27px' }, maxLength: 2 }}
            onChange={(e) => handleChange('endMonth', e.target.value)}
          />
        </>
      )}
      {required && <RequiredIcon />}
    </Stack>
  );
};

export default DateInputField;
