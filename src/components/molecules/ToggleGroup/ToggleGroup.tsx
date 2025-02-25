import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import theme from "@/app/theme";

interface ToggleGroupProps {
  value: string | null;
  onChange: (event: React.MouseEvent<HTMLElement>, newValue: string | null) => void;
  options: {
    value: string;
    label: string;
  }[];
}

const ToggleGroup: React.FC<ToggleGroupProps> = ({ value, onChange, options }) => {
  return (
    <ToggleButtonGroup value={value} exclusive onChange={onChange} aria-label="toggle group">
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value} aria-label={option.label} sx={{
          color: theme.palette.primary.main,
          '&.Mui-selected': {
            color: theme.palette.common.white,
            backgroundColor: theme.palette.primary.main,
          },
          '&.Mui-selected:hover': {
            backgroundColor: theme.palette.primary.main,
          },
        }}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default ToggleGroup;