import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerFillProps = Omit<IconBaseProps, 'children'>;

const BannerFill = memo(
  forwardRef<SVGSVGElement, BannerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-fill" {...props}>
      <path fill="currentColor" d="M20 3a1 1 0 1 1 0 2h-1v10.86a5 5 0 0 1-2.23 4.16l-3.52 2.35c-.76.5-1.74.5-2.5 0l-3.52-2.35A5 5 0 0 1 5 15.86V5H4a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BannerFill.displayName = 'BannerFill';

// Triple export pattern (lucide-react style)
export { BannerFill, BannerFill as BannerFillIcon, BannerFill as SiBannerFill };
export default BannerFill;
export type { BannerFillProps };
