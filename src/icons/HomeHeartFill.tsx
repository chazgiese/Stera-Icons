import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeHeartFillProps = Omit<IconBaseProps, 'children'>;

const HomeHeartFill = memo(
  forwardRef<SVGSVGElement, HomeHeartFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="home-heart-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.95 1.94a4 4 0 0 1 2.1 0c.82.23 1.53.8 2.52 1.58l3.54 2.76c.7.54 1.2.92 1.56 1.41q.46.64.67 1.38c.17.6.16 1.22.16 2.1v3.63q.01 1.33-.05 2.22c-.05.6-.15 1.15-.41 1.66-.41.8-1.06 1.45-1.86 1.86-.51.26-1.06.36-1.66.41q-.9.06-2.22.05H8.7q-1.34.01-2.22-.05a4 4 0 0 1-1.66-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.66q-.06-.9-.05-2.22v-3.63c0-.88 0-1.5.16-2.1q.2-.75.67-1.38c.37-.49.87-.87 1.56-1.4L8.43 3.5c.98-.76 1.7-1.34 2.52-1.57m2.96 7.56c-.85 0-1.58.5-1.91 1.21a2.1 2.1 0 0 0-4 .87c0 .9.49 1.6.69 1.88.95 1.32 2.27 2.22 3.31 3.04 1.04-.82 2.36-1.72 3.31-3.04.2-.28.69-.99.69-1.88 0-1.15-.94-2.08-2.1-2.08" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeHeartFill.displayName = 'HomeHeartFill';

// Triple export pattern (lucide-react style)
export { HomeHeartFill, HomeHeartFill as HomeHeartFillIcon, HomeHeartFill as SiHomeHeartFill };
export default HomeHeartFill;
export type { HomeHeartFillProps };
