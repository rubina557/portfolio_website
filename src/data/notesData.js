import devImage from '../assets/images/dev.jpg';
import designImage from '../assets/images/design.png';

export const notesData = [
  {
    slug: 'ultimate-guide-nextjs-app-router',
    category: 'Dev',
    title: 'Ultimate guide to the App Router in Next.js 13',
    date: '17th Jul 2023',
    readTime: '7 min read',
    image: devImage,
    content: `
      <p>The App Router in Next.js is responsible for handling client-side routing within your application. It provides developers with a clear and intuitive way to define routes, handle navigation, and manage dynamic URLs. Here are some key features of the Next.js App Router:</p>
      <br/>
      <ol>
        <li><strong>File-based Routing:</strong> Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.</li>
        <li><strong>Dynamic Routes:</strong> Next.js allows you to create dynamic routes by using brackets ([]) in the file name or directory structure. This helps optimize the initial page load.</li>
        <li><strong>Link Component:</strong> Next.js provides the <pre><code><Link></code></pre> component, which enables client-side navigation and can be used to create links between pages. It handles prefetching and avoids full page reloads.</li>
        <li><strong>Programmatic Navigation:</strong> Next.js also offers programmatic navigation through the useRouter hook.</li>
        <li><strong>Code Splitting:</strong> Next.js automatically performs code splitting, which means that only the JavaScript and CSS needed for the current page are loaded. This helps optimize the initial page load times and improve performance.</li>
      </ol>
      <br/>
      <p>These are some of the fundamental features and concepts of the App Router in Next.js. However, it's important to note that newer versions of Next.js may introduce additional enhancements or changes to the App Router.</p>
    `,
  },
  {
    slug: 'design-systems-for-scale',
    category: 'Design',
    title: 'Designing Systems for Large-Scale Applications',
    date: '28th Aug 2023',
    readTime: '12 min read',
   image: designImage,
       content: `
      <p>The App Router in Next.js is responsible for handling client-side routing within your application. It provides developers with a clear and intuitive way to define routes, handle navigation, and manage dynamic URLs. Here are some key features of the Next.js App Router:</p>
      <br/>
      <ol>
        <li><strong>File-based Routing:</strong> Next.js uses a file-based routing system, where each page of your application is represented by a file in the "pages" directory. The name of the file determines the corresponding URL path. For example, a file named "about.js" in the "pages" directory will be accessible at the "/about" URL path.</li>
        <li><strong>Dynamic Routes:</strong> Next.js allows you to create dynamic routes by using brackets ([]) in the file name or directory structure. This helps optimize the initial page load.</li>
        <li><strong>Link Component:</strong> Next.js provides the <pre><code><Link></code></pre> component, which enables client-side navigation and can be used to create links between pages. It handles prefetching and avoids full page reloads.</li>
        <li><strong>Programmatic Navigation:</strong> Next.js also offers programmatic navigation through the useRouter hook.</li>
        <li><strong>Code Splitting:</strong> Next.js automatically performs code splitting, which means that only the JavaScript and CSS needed for the current page are loaded. This helps optimize the initial page load times and improve performance.</li>
      </ol>
      <br/>
      <p>These are some of the fundamental features and concepts of the App Router in Next.js. However, it's important to note that newer versions of Next.js may introduce additional enhancements or changes to the App Router.</p>
    `,
  },
  // Add more articles here
];