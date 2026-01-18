import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BannerFillProps = Omit<IconBaseProps, 'children'>;

const BannerFill = memo(
  forwardRef<SVGSVGElement, BannerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21.5 2a1 1 0 0 1 0 2h-1.75v11.68c0 1.7-.91 3.28-2.4 4.12L13 22.3a2 2 0 0 1-1.98 0l-4.37-2.5a4.8 4.8 0 0 1-2.39-4.12V4H2.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BannerFill.displayName = 'BannerFill';

export { BannerFill };
export type { BannerFillProps };
