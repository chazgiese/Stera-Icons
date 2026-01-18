import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BannerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BannerBoldDuotone = memo(
  forwardRef<SVGSVGElement, BannerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M20 15.68a5 5 0 0 1-2.52 4.34l-4.36 2.5c-.7.39-1.54.39-2.24 0l-4.36-2.5A5 5 0 0 1 4 15.68V4h2v11.68a3 3 0 0 0 1.51 2.6l4.37 2.5q.12.06.24 0l4.37-2.5a3 3 0 0 0 1.51-2.6V4h2z" opacity={.4} />
        <path fill="currentColor" d="M21.5 2a1 1 0 0 1 0 2h-19a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

BannerBoldDuotone.displayName = 'BannerBoldDuotone';

export { BannerBoldDuotone };
export type { BannerBoldDuotoneProps };
