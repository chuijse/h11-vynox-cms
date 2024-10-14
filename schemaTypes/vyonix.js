import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vyonix',
  title: 'Hardcore Eleven CMS',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      readOnly: true,
      hidden: true,
      //description: 'Sube todos los archivos correpondientes a la página de FCKFF',
      //initialValue: 'HARDCORE ELEVEN CMS website',
      //options: [{readOnly: true}],
    }),
    defineField({
      name: 'webTitle',
      title: 'Titulo de la web',
      type: 'string',
      description: 'El texto debe tener como máximo 50 caracteres',
      validation: (rule) => rule.required().max(60).error('A sobre pasado el número de caracteres'),
    }),
    defineField({
      name: 'layDown',
      title: 'Bajada del título',
      type: 'text',
      description: 'El texto debe tener como máximo 350 caracteres',
      validation: (rule) =>
        rule.required().max(350).error('A sobre pasado el número de caracteres'),
    }),
    defineField({
      name: 'shoes',
      title: 'Football shoes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.max(3).error('You can only add up to 3 items.'),
    }),
    defineField({
      name: 'equipment',
      title: 'Football Equipment',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.max(3).error('You can only add up to 3 items.'),
    }),
    defineField({
      name: 'clothes',
      title: 'Football clothing',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.max(3).error('You can only add up to 3 items.'),
    }),
    defineField({
      name: 'accessories',
      title: 'Football Accessories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.max(3).error('You can only add up to 3 items.'),
    }),
    defineField({
      name: 'email',
      title: 'email de contacto',
      type: 'string',
      validation: (rule) => rule.required().email().error('Debe ser un email'),
    }),
    defineField({
      name: 'telephone',
      title: 'Telefono de contacto',
      type: 'string',
    }),
    defineField({
      name: 'direction',
      title: 'dirección',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About Us',
      type: 'text',
      description: 'El texto debe tener como máximo 350 caracteres',
      validation: (rule) =>
        rule.required().max(600).error('A sobre pasado el número de caracteres'),
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'socialMediaUrl',
    }),
    defineField({
      name: 'instagram',
      title: 'instagram URL',
      type: 'socialMediaUrl',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter URL',
      type: 'socialMediaUrl',
    }),
    defineField({
      name: 'linkedin',
      title: 'linkedin URL',
      type: 'socialMediaUrl',
    }),
    defineField({
      name: 'youtube',
      title: 'youTube URL',
      type: 'socialMediaUrl',
    }),
  ],
})
