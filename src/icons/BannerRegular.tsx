import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BannerRegularProps = Omit<IconBaseProps, 'children'>;

const BannerRegular = memo(
  forwardRef<SVGSVGElement, BannerRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner" {...props}>
      <path fillRule="evenodd" d="M20 3.25a.75.75 0 0 1 0 1.5h-1.25v11.1c0 1.6-.8 3.08-2.12 3.96l-3.52 2.35a2 2 0 0 1-2.22 0l-3.52-2.35a4.8 4.8 0 0 1-2.12-3.95V4.75H4a.75.75 0 0 1 0-1.5zM6.75 4.75v11.1c0 1.1.54 2.11 1.45 2.71l3.52 2.35a.5.5 0 0 0 .56 0l3.52-2.35c.9-.6 1.45-1.61 1.45-2.7V4.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerRegular.displayName = 'BannerRegular';

// Triple export pattern (lucide-react style)
export { BannerRegular, BannerRegular as BannerRegularIcon, BannerRegular as SiBannerRegular };
export default BannerRegular;
export type { BannerRegularProps };
