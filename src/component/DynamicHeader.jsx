// 'use client'
// import { usePathname } from 'next/navigation';
// import styles from '@/app/page.module.css';

// const DynamicHeaderComponent = () => {
//   const pathname = usePathname();

//   // Define route-specific content and styles
//   const routeConfig = {
//     '/': {
//       style: styles.home,
//       title: 'Welcome to Home',
//       content: 'This is the content for the main Home page.',
//     },
//     '/home2': {
//       style: styles.home2,
//       title: 'Welcome to Home2',
//       content: 'This is the content for Home2.',
//     },
//     '/home3': {
//       style: styles.home3,
//       title: 'Welcome to Home3',
//       content: 'This is the content for Home3.',
//     },
//   };

//   // Get the current route's config, defaulting to '/' if not found
//   const { style, title, content } = routeConfig[pathname] || routeConfig['/'];

//   return (
//     <div className={style}>
//       <h1>{title}</h1>
//       <p>{content}</p>
//     </div>
//   );
// };

// export default DynamicHeaderComponent;

'use client'
import { usePathname } from 'next/navigation';

import Header1 from '@/component/Default/Header'
import Header2 from '@/component/Home2/Header'
// import Header3 from '@/component/Home3/Header'

const DynamicHeaderComponent = () => {
  const pathname = usePathname();

  // Map each route to its unique component
  const routeConfig = {
    '/': Header1,
    '/home2': Header2,
    // '/home3': Header3,
  };

  // Get the component based on the pathname, default to HomePage if not found
  const HeaderComponent = routeConfig[pathname] || Header1;

  return <HeaderComponent />;
};

export default DynamicHeaderComponent;
