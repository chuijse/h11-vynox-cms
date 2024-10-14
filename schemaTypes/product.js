import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'El texto debe tener como máximo 350 caracteres',
      validation: (rule) =>
        rule.required().max(360).error('A sobre pasado el número de caracteres'),
    }),
    defineField({
      name: 'image',
      title: 'Imagen del producto',
      type: 'image',
    }),
  ],
})
