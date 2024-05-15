import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export default function IncDec() {
    const clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
    const clampV = clamp(1, 10);
    const [value, setValue] = useState(1);


    return (
      <Box style={{background: 'rgb(246, 246, 246)', width: '25%',}} alignItems={'center'} justifyContent={'space-between'} display="flex">
        <IconButton
          sx={{
            borderRadius: 0,
            color: '00BFFF',
            background: 'transparent',
          }}
          onClick={() => setValue(clampV(value - 1))}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            
           
          }}
        >
          {value}
        </Typography>
        <IconButton
          sx={{
            borderRadius: 0,
            color: '00BFFF',
            background: 'transparent',
          }}
          onClick={() => setValue(clampV(value + 1))}
        >
          <AddIcon />
        </IconButton>
      </Box>
    );
}