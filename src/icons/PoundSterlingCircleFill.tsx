import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleFillProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFill = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m3.86 6.3a3.95 3.95 0 0 0-3.94-2.01c-1.41.2-2.67 1.3-2.67 3.02v1.48H8.5a1 1 0 0 0 0 2h.75v1.48c0 .13-.11.37-.49.66a4 4 0 0 1-.61.38l-.04.02a1 1 0 0 0 .39 1.92h7a1 1 0 1 0 0-2h-4.47q.2-.44.22-.98v-1.48H13a1 1 0 0 0 0-2h-1.75V9.3c0-.57.37-.96.96-1.04s1.39.16 1.93 1.06a1 1 0 1 0 1.72-1.03" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleFill.displayName = 'PoundSterlingCircleFill';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleFill, PoundSterlingCircleFill as PoundSterlingCircleFillIcon, PoundSterlingCircleFill as SiPoundSterlingCircleFill };
export default PoundSterlingCircleFill;
export type { PoundSterlingCircleFillProps };
