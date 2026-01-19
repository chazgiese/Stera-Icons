import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeHeartFillProps = Omit<IconBaseProps, 'children'>;

const HomeHeartFill = memo(
  forwardRef<SVGSVGElement, HomeHeartFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-heart-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.54 2.64a4 4 0 0 1 4.92 0l6 4.67A4 4 0 0 1 22 10.47V18a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-7.53A4 4 0 0 1 3.54 7.3zM13.9 10c-.84 0-1.57.5-1.9 1.21a2.1 2.1 0 0 0-4 .87c0 .9.49 1.6.69 1.88.95 1.32 2.27 2.22 3.31 3.04 1.04-.82 2.36-1.72 3.31-3.04.2-.28.69-.99.69-1.88 0-1.15-.94-2.08-2.1-2.08" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartFill.displayName = 'HomeHeartFill';

// Triple export pattern (lucide-react style)
export { HomeHeartFill, HomeHeartFill as HomeHeartFillIcon, HomeHeartFill as SiHomeHeartFill };
export default HomeHeartFill;
export type { HomeHeartFillProps };
