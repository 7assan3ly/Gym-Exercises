import React from 'react'
import './Detail.css'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImg from '../../assets/icons/body-part.png'
import TargetImg from '../../assets/icons/target.png'
import EquipmentImg from '../../assets/icons/equipment.png'

const Detail = ({ ExerciseDetail }) => {

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: ExerciseDetail.bodyPart,
    },
    {
      icon: TargetImg,
      name: ExerciseDetail.target,
    },
    {
      icon: EquipmentImg,
      name: ExerciseDetail.equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={ExerciseDetail.gifUrl} alt='' className='detailImg' loading='lazy' />
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography sx={{ fontSize: { lg: '60px', xs: '30px' } }} fontWeight={700} textTransform='capitalize'>
          {ExerciseDetail.name}
        </Typography>

        <Typography sx={{ fontSize: { lg: '22px', xs: '18px' } }}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{ExerciseDetail.name}</span> bup is one
          of the best <br /> exercises to target your {ExerciseDetail.target}. It will help you improve your{' '}
          <br /> mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button className='exeBtn' sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={ExerciseDetail.bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Detail