import localFont from 'next/font/local';
import { Raleway } from 'next/font/google';

export const inter = localFont({
    src: [
      {
        path: '../../public/fonts/InterDisplay-Regular.woff2',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/InterDisplay-Medium.woff2',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/InterDisplay-SemiBold.woff2',
        weight: '600',
        style: 'normal',
      },
      {
        path: '../../public/fonts/InterDisplay-Bold.woff2',
        weight: '700',
        style: 'normal',
      },
    ],
  })

export const raleWay = Raleway({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
  })