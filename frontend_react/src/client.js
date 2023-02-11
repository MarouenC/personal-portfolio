import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: process.env.REACT_APP_SANITY_PORJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token : process.env.REACT_APP_SANITY_TOKEN
})

const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);