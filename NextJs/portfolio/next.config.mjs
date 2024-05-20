import createMDX from '@next/mdx'


 // Configuración de MDX
const withMDX = createMDX({
    extension: /\.mdx?$/,  // Configura las extensiones .mdx y .md para ser procesadas
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
      // Aquí puedes agregar cualquier configuración adicional para los plugins de remark y rehype
    },
  });
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 

 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)