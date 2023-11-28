import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const SkeletonFood = (props) => {
    const {data} = [props]
    return (
        <Stack spacing={1} justifyContent="center" alignItems="center">
            <Skeleton animation="wave" style={{ marginTop: 16 }} variant="text" sx={{ fontSize: '1rem' }} width="100%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width="100%" />

            <Skeleton animation="wave" variant="text" sx={{ fontSize: '1rem' }} width="30%" />

            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
        </Stack>
    )
}

export default SkeletonFood