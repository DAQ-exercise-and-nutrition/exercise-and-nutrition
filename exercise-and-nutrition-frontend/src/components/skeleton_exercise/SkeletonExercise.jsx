import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const SkeletonExercise = (props) => {
    const {data} = [props]
    return (
        <Stack spacing={1}>
            <Skeleton animation="wave" style={{ marginTop: 16 }} variant="text" sx={{ fontSize: '1rem' }} width="100%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="80%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="80%" />
            <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="80%" />
        </Stack>
    )
}

export default SkeletonExercise