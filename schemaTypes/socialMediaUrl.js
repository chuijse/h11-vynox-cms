import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMediaUrl',
  title: 'Social Media Icon',
  type: 'object',
  fields: [
    defineField({
      title: 'Do yo have?',
      name: 'showUrl',
      type: 'boolean',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      hidden: ({parent}) => !parent?.showUrl,
    }),
  ],
})
