import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'ziz74bwf', 
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2023-07-04', 
})
