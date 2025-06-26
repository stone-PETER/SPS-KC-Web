import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    // WordPress post ID
    defineField({
      name: 'wpId',
      title: 'WordPress Post ID',
      type: 'number',
    }),
    // WordPress original link
    defineField({
      name: 'wpLink',
      title: 'WordPress Link',
      type: 'url',
    }),
    // Author
    defineField({
      name: 'author',
      type: 'string',
    }),
    // Images: reference to event images
    defineField({
      name: 'eventImages',
      title: 'Event Images',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'event'}],
          options: {filter: 'defined(image)'},
        },
      ],
      description: 'References to event documents whose images are used in this post.',
    }),
    // WordPress HTML content
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      description: 'HTML or rich text content from WordPress.',
    }),
  ],
})
