import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeXBoldProps = Omit<IconBaseProps, 'children'>;

const HomeXBold = memo(
  forwardRef<SVGSVGElement, HomeXBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-x-bold" {...props}>
      <path fill="currentColor" d="M13.8 10.3a1 1 0 1 1 1.4 1.4l-1.79 1.8 1.8 1.8a1 1 0 1 1-1.42 1.4L12 14.92l-1.8 1.8a1 1 0 0 1-1.4-1.42l1.79-1.79-1.8-1.8a1 1 0 1 1 1.42-1.4L12 12.08z" />
        <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm3.69 1.58a2 2 0 0 0-2.46 0l-6 4.67A2 2 0 0 0 4 10.47V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-7.53a2 2 0 0 0-.77-1.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeXBold.displayName = 'HomeXBold';

// Triple export pattern (lucide-react style)
export { HomeXBold, HomeXBold as HomeXBoldIcon, HomeXBold as SiHomeXBold };
export type { HomeXBoldProps };
