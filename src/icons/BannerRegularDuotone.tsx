import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerRegularDuotone = memo(
  forwardRef<SVGSVGElement, BannerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-duotone" {...props}>
      <path d="M18.75 15.86c0 1.59-.8 3.07-2.12 3.95l-3.52 2.35a2 2 0 0 1-2.22 0l-3.52-2.35a4.8 4.8 0 0 1-2.12-3.95V4.75h1.5v11.1c0 1.1.54 2.11 1.45 2.71l3.52 2.35a.5.5 0 0 0 .56 0l3.52-2.35c.9-.6 1.45-1.61 1.45-2.7V4.75h1.5z" opacity={.4} />
        <path d="M20 3.25a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BannerRegularDuotone.displayName = 'BannerRegularDuotone';

// Triple export pattern (lucide-react style)
export { BannerRegularDuotone, BannerRegularDuotone as BannerRegularDuotoneIcon, BannerRegularDuotone as SiBannerRegularDuotone };
export default BannerRegularDuotone;
export type { BannerRegularDuotoneProps };
