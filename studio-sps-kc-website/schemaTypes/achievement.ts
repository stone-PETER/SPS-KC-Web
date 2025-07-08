import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'achievement',
  title: 'Achievement',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Achievement Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name from lucide-react (e.g., Award, Sparkles, UserRound, etc.)',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
})
