import { useForm } from 'react-hook-form'

type formData = {
  name: string,
  bool: boolean
}

const useForms = () => {
  const form = useForm<formData>()
  const onSubmit = (data: formData) => console.log(data)

  return { form, onSubmit }
}

export default useForms
