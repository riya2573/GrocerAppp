import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import GroceryCard from './GroceryCard';

const Grocery = ({ grocery }) => {
  return (
    <Box id="grocery" sx={{mt: { lg: '110px' }}} mt="50px" p="20px">
      <Stack direction="row"
      sx={{ gap: { lg:'110px', xs:'50px'}}}
      flexWrap="wrap"
      justifyContent="center">
        {grocery?.data?.map((grocery) => (
          <GroceryCard grocery={grocery} />
          ))}
      </Stack>

    </Box>
  );
};

export default Grocery