import React, { type FC } from 'react'
import { Box, Button, Stack, Switch, TextField, Typography } from '@mui/material'
import useForms from '../api/useForms'
import { Controller } from 'react-hook-form'

const Forms: FC = () => {
  const {
    form,
    fields,
    fieldAdd,
    fieldRemove,
    onSubmit
  } = useForms()

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
      {
        fields.map((f, i) => (
          <Box
            key={f.id}
            border={1}
            p={2}
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={4}
            >
              <Typography>商品名</Typography>
              <TextField
                {...form.register(`field.${i}.itemName`)}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={4}
            >
              <Typography>価格</Typography>
              <TextField
                {...form.register(`field.${i}.price`)}
              />
            </Stack>

            <Button onClick={()=>fieldRemove(i)}>削除</Button>
          </Box>
        ))
      }
      <Button onClick={() => fieldAdd()}>追加</Button>
      <Stack />

      <Button type="submit" >コンソールに表示</Button>
    </Stack>
  )
}

export default Forms
