import {defineType, defineField} from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem principal',
      type: 'image',
      options: {
        hotspot: true,  // para recorte inteligente
      }
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      description: 'Pequeno resumo do post para pré-visualização',
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [{type: 'block'}], // editor de rich text do Sanity
      validation: Rule => Rule.required()
    }),
  ],
})
