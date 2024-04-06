import { createClient } from 'next-sanity'

import { apiVersion, projectId, useCdn } from '../env'
// console.log('dataset', dataset);

export const client = createClient({
  apiVersion,
  dataset: 'production',
  projectId,
  useCdn,
})
