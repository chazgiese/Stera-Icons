import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BannerRegularProps = Omit<IconBaseProps, 'children'>;

const BannerRegular = memo(
  forwardRef<SVGSVGElement, BannerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.5 2.25a.75.75 0 0 1 0 1.5h-1.75v11.93c0 1.7-.91 3.28-2.4 4.12L13 22.3a2 2 0 0 1-1.98 0l-4.37-2.5a4.8 4.8 0 0 1-2.39-4.12V3.75H2.5a.75.75 0 0 1 0-1.5zM5.75 3.75v11.93c0 1.16.63 2.24 1.64 2.82l4.36 2.5a.5.5 0 0 0 .5 0l4.36-2.5a3.3 3.3 0 0 0 1.64-2.82V3.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerRegular.displayName = 'BannerRegular';

// Triple export pattern (lucide-react style)
export { BannerRegular, BannerRegular as BannerRegularIcon, BannerRegular as SiBannerRegular };
export type { BannerRegularProps };
