import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerBoldProps = Omit<IconBaseProps, 'children'>;

const BannerBold = memo(
  forwardRef<SVGSVGElement, BannerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-bold" {...props}>
      <path fillRule="evenodd" d="M20 3a1 1 0 1 1 0 2h-1v10.86a5 5 0 0 1-2.23 4.16l-3.52 2.35c-.76.5-1.74.5-2.5 0l-3.52-2.35A5 5 0 0 1 5 15.86V5H4a1 1 0 0 1 0-2zM7 5v10.86a3 3 0 0 0 1.34 2.5l3.52 2.35q.15.07.28 0l3.52-2.35a3 3 0 0 0 1.34-2.5V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerBold.displayName = 'BannerBold';

// Triple export pattern (lucide-react style)
export { BannerBold, BannerBold as BannerBoldIcon, BannerBold as SiBannerBold };
export default BannerBold;
export type { BannerBoldProps };
