import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerBoldDuotone = memo(
  forwardRef<SVGSVGElement, BannerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-bold-duotone" {...props}>
      <path fill="currentColor" d="M19 15.86a5 5 0 0 1-2.23 4.16l-3.52 2.35c-.76.5-1.74.5-2.5 0l-3.52-2.35A5 5 0 0 1 5 15.86V5h2v10.86a3 3 0 0 0 1.34 2.5l3.52 2.35q.15.07.28 0l3.52-2.35a3 3 0 0 0 1.34-2.5V5h2z" opacity={.4} />
        <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BannerBoldDuotone.displayName = 'BannerBoldDuotone';

// Triple export pattern (lucide-react style)
export { BannerBoldDuotone, BannerBoldDuotone as BannerBoldDuotoneIcon, BannerBoldDuotone as SiBannerBoldDuotone };
export default BannerBoldDuotone;
export type { BannerBoldDuotoneProps };
