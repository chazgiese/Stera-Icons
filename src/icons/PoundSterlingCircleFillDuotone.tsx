import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m3.86 6.3a3.95 3.95 0 0 0-3.94-2.01c-1.41.2-2.67 1.3-2.67 3.02v1.48H8.5a1 1 0 0 0 0 2h.75v1.48c0 .13-.11.37-.49.66a4 4 0 0 1-.61.38l-.04.02a1 1 0 0 0 .39 1.92h7a1 1 0 1 0 0-2h-4.47q.2-.44.22-.98v-1.48H13a1 1 0 0 0 0-2h-1.75V9.3c0-.57.37-.96.96-1.04s1.39.16 1.93 1.06a1 1 0 1 0 1.72-1.03" clipRule="evenodd" opacity={.4} />
        <path d="M11.92 6.29c1.4-.21 2.98.44 3.94 2a1 1 0 0 1-1.72 1.04c-.54-.9-1.34-1.15-1.93-1.06-.6.08-.96.47-.96 1.04v1.48H13a1 1 0 0 1 0 2h-1.75v1.48q-.01.55-.22.98h4.47a1 1 0 1 1 0 2h-7a1 1 0 0 1-.4-1.92h.01l.04-.02a3 3 0 0 0 .61-.38c.38-.29.49-.53.49-.66v-1.48H8.5a1 1 0 1 1 0-2h.75V9.3a3 3 0 0 1 2.67-3.02" />
    </IconBase>
  ))
);

PoundSterlingCircleFillDuotone.displayName = 'PoundSterlingCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleFillDuotone, PoundSterlingCircleFillDuotone as PoundSterlingCircleFillDuotoneIcon, PoundSterlingCircleFillDuotone as SiPoundSterlingCircleFillDuotone };
export default PoundSterlingCircleFillDuotone;
export type { PoundSterlingCircleFillDuotoneProps };
