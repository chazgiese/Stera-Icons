import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BannerBoldProps = Omit<IconBaseProps, 'children'>;

const BannerBold = memo(
  forwardRef<SVGSVGElement, BannerBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="banner-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21.5 2a1 1 0 0 1 0 2H20v11.68a5 5 0 0 1-2.52 4.34l-4.36 2.5c-.7.39-1.54.39-2.24 0l-4.36-2.5A5 5 0 0 1 4 15.68V4H2.5a1 1 0 0 1 0-2zM6 4v11.68a3 3 0 0 0 1.51 2.6l4.37 2.5q.12.06.24 0l4.37-2.5a3 3 0 0 0 1.51-2.6V4z" clipRule="evenodd" />
    </IconBase>
  ))
);

BannerBold.displayName = 'BannerBold';

// Triple export pattern (lucide-react style)
export { BannerBold, BannerBold as BannerBoldIcon, BannerBold as SiBannerBold };
export default BannerBold;
export type { BannerBoldProps };
