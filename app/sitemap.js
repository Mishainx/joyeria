export default function sitemap() {
  return [
    {
      url: 'https://www.veronicagalainena.com.ar',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.veronicagalainena.com.ar/taller',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}