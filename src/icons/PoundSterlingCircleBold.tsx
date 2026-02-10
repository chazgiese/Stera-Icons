import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PoundSterlingCircleBoldProps = Omit<IconBaseProps, 'children'>;

const PoundSterlingCircleBold = memo(
  forwardRef<SVGSVGElement, PoundSterlingCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="pound-sterling-circle-bold" {...props}>
      <path fill="currentColor" d="M11.92 6.29c1.4-.21 2.98.44 3.94 2a1 1 0 0 1-1.72 1.04c-.54-.9-1.34-1.15-1.93-1.06-.6.08-.96.47-.96 1.04v1.48H13a1 1 0 0 1 0 2h-1.75v1.48q-.01.55-.22.98h4.47a1 1 0 1 1 0 2h-7a1 1 0 0 1-.4-1.92h.01l.04-.02a3 3 0 0 0 .61-.38c.38-.29.49-.53.49-.66v-1.48H8.5a1 1 0 0 1 0-2h.75V9.3a3 3 0 0 1 2.67-3.02" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

PoundSterlingCircleBold.displayName = 'PoundSterlingCircleBold';

// Triple export pattern (lucide-react style)
export { PoundSterlingCircleBold, PoundSterlingCircleBold as PoundSterlingCircleBoldIcon, PoundSterlingCircleBold as SiPoundSterlingCircleBold };
export default PoundSterlingCircleBold;
export type { PoundSterlingCircleBoldProps };
