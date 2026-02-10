import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerFillDuotone = memo(
  forwardRef<SVGSVGElement, BannerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-fill-duotone" {...props}>
      <path fill="currentColor" d="M19 15.86a5 5 0 0 1-2.23 4.16l-3.52 2.35c-.76.5-1.74.5-2.5 0l-3.52-2.35A5 5 0 0 1 5 15.86V5h14z" opacity={.4} />
        <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BannerFillDuotone.displayName = 'BannerFillDuotone';

// Triple export pattern (lucide-react style)
export { BannerFillDuotone, BannerFillDuotone as BannerFillDuotoneIcon, BannerFillDuotone as SiBannerFillDuotone };
export default BannerFillDuotone;
export type { BannerFillDuotoneProps };
