import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeSimpleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleBoldDuotone = memo(
  forwardRef<SVGSVGElement, HomeSimpleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-simple-bold-duotone" {...props}>
      <path fill="currentColor" d="M13.23 4.22a2 2 0 0 0-2.46 0l-6 4.67A2 2 0 0 0 4 10.47V18c0 1.1.9 2 2 2h2a1 1 0 1 0 0 2H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3l6-4.67a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4h-2a1 1 0 0 0 0-2h2a2 2 0 0 0 2-2v-7.53a2 2 0 0 0-.77-1.58z" opacity={.4} />
        <path fill="currentColor" d="M16 20a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

HomeSimpleBoldDuotone.displayName = 'HomeSimpleBoldDuotone';

// Triple export pattern (lucide-react style)
export { HomeSimpleBoldDuotone, HomeSimpleBoldDuotone as HomeSimpleBoldDuotoneIcon, HomeSimpleBoldDuotone as SiHomeSimpleBoldDuotone };
export default HomeSimpleBoldDuotone;
export type { HomeSimpleBoldDuotoneProps };
