import { Menu, MenuItem } from "@mui/material";
import { styled } from "@mui/system";

interface MenuProps {
  anchorEl: HTMLElement | null;
  options: string[];
  handleSelect: (option: string) => void;
  handleClose: () => void;  
}

const StyledMenu = styled(Menu)({
  '& .MuiPaper-root': {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
});

const StyledMenuItem = styled(MenuItem)({
  fontWeight: 'bold',
  fontSize: '16px',
  padding: '12px 24px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const CustomMenu: React.FC<MenuProps> = ({ anchorEl, options, handleSelect, handleClose }) => {
  return (
    <StyledMenu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      {options.map((option) => (
        <StyledMenuItem key={option} onClick={() => handleSelect(option)}>
          {option}          
        </StyledMenuItem>
      ))}
    </StyledMenu>
  );
};
