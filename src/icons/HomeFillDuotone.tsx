import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zM11 11.5c-.83 0-1.5.67-1.5 1.5v4.15A1.5 1.5 0 0 0 11 18.5h2c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M13 11.5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.35V13c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

HomeFillDuotone.displayName = 'HomeFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeFillDuotone, HomeFillDuotone as HomeFillDuotoneIcon, HomeFillDuotone as SiHomeFillDuotone };
export default HomeFillDuotone;
export type { HomeFillDuotoneProps };
