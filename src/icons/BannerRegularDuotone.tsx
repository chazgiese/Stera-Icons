import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerRegularDuotone = memo(
  forwardRef<SVGSVGElement, BannerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-duotone" {...props}>
      <path fill="currentColor" d="M19.75 15.68c0 1.7-.91 3.28-2.4 4.12L13 22.3a2 2 0 0 1-1.98 0l-4.37-2.5a4.8 4.8 0 0 1-2.39-4.12V3.75h1.5v11.93c0 1.16.63 2.24 1.64 2.82l4.36 2.5a.5.5 0 0 0 .5 0l4.36-2.5a3.3 3.3 0 0 0 1.64-2.82V3.75h1.5z" opacity={.4} />
        <path fill="currentColor" d="M21.5 2.25a.75.75 0 0 1 0 1.5h-19a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BannerRegularDuotone.displayName = 'BannerRegularDuotone';

// Triple export pattern (lucide-react style)
export { BannerRegularDuotone, BannerRegularDuotone as BannerRegularDuotoneIcon, BannerRegularDuotone as SiBannerRegularDuotone };
export default BannerRegularDuotone;
export type { BannerRegularDuotoneProps };
