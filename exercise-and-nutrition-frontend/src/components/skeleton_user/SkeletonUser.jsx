import React from 'react'
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';

const SkeletonUser = (props) => {
    const { data } = props
    console.log("skel");
    return (
        <Stack spacing={1} direction="row">
            <Skeleton animation="wave" variant="rounded" height={200} width="40%" />
            <Stack spacing={1} width="60%">
                <Skeleton animation="wave" style={{ marginTop: 16 }} variant="text" sx={{ fontSize: '1rem' }} width="50%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
                <Skeleton animation="wave" variant="text" sx={{ fontSize: '12px' }} width="70%" />
            </Stack>
        </Stack>
    )
}

export default SkeletonUser