import {CalendarIcon, UserIcon, PinIcon} from '@sanity/icons'

export const structure = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      S.listItem()
        .title('Hardcore Eleven CMS')
        .child(S.document().schemaType('eleven').documentId('eleven')),
      S.listItem()
        .title('Vyonix CMS')
        .child(S.document().schemaType('vyonix').documentId('vyonix')),
      S.documentTypeListItem('product').title('Productos'),
    ])
