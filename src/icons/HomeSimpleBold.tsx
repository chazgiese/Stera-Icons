import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeSimpleBoldProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleBold = memo(
  forwardRef<SVGSVGElement, HomeSimpleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-simple-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm3.69 1.58a2 2 0 0 0-2.46 0l-6 4.67A2 2 0 0 0 4 10.47V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-7.53a2 2 0 0 0-.77-1.58z" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeSimpleBold.displayName = 'HomeSimpleBold';

// Triple export pattern (lucide-react style)
export { HomeSimpleBold, HomeSimpleBold as HomeSimpleBoldIcon, HomeSimpleBold as SiHomeSimpleBold };
export default HomeSimpleBold;
export type { HomeSimpleBoldProps };
