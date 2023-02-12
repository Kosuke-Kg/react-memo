import React, { type FC } from 'react'
import { Button, Stack, Switch, TextField, Typography } from '@mui/material'
import useForms from '../api/useForms'
import { Controller } from 'react-hook-form'

const Forms: FC = () => {
  const { form, onSubmit } = useForms()

  return (
    <Stack
      component="form"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={4}
      onSubmit={form.handleSubmit((data) => onSubmit(data))}
    >

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Typography>テキストフィールド</Typography>
        <TextField
          { ...form.register('name') }
        />
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Typography>スイッチ Bool</Typography>
        <Controller
          control={form.control}
          name="bool"
          render={({field, fieldState}) => (
            <Switch
              {...field}
            />
          )}
        />
      </Stack>

      <Button type="submit" >コンソールに表示</Button>
    </Stack>
  )
}

export default Forms
