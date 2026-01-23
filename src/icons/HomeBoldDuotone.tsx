import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeBoldDuotone = memo(
  forwardRef<SVGSVGElement, HomeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zm3.69 1.58a2 2 0 0 0-2.46 0l-6 4.67A2 2 0 0 0 4 10.47V18c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2v-7.53a2 2 0 0 0-.77-1.58z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 11.5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.35V13c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

HomeBoldDuotone.displayName = 'HomeBoldDuotone';

// Triple export pattern (lucide-react style)
export { HomeBoldDuotone, HomeBoldDuotone as HomeBoldDuotoneIcon, HomeBoldDuotone as SiHomeBoldDuotone };
export default HomeBoldDuotone;
export type { HomeBoldDuotoneProps };
