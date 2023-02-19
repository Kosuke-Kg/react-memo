import { useFieldArray, useForm } from 'react-hook-form'

type formData = {
  name: string,
  bool: boolean,
  field: {
    itemName: string,
    price: number
  }[]
}

const useForms = () => {
  const form = useForm<formData>({
    defaultValues: {
      name: '',
      bool: true,
      field: [
        {itemName: '', price: 0}
      ]
    }
  })

  const {fields, append, remove} = useFieldArray({
    control: form.control,
    name: 'field',
  })

  const fieldAdd = () => append({itemName: '', price: 0})

  const fieldRemove = (index: number) => remove(index)

  const onSubmit = (data: formData) => console.log(data)

  return {
    form,
    fields,
    fieldAdd,
    fieldRemove,
    onSubmit
  }
}

export default useForms
