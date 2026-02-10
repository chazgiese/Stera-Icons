import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-fill-duotone" {...props}>
      <path d="M9.75 2q.66 0 1.25.2v8.59a1.8 1.8 0 0 1-1.52 1.2L9.3 12a.9.9 0 0 0 0 1.8c.79 0 1.46.5 1.7 1.21v6.66a5 5 0 0 0-1.7.33 4.6 4.6 0 0 1-4.56-4 4.6 4.6 0 0 1-1.45-7.4 4.12 4.12 0 0 1 2.5-5.7A4.15 4.15 0 0 1 9.75 2M14.25 2a4.15 4.15 0 0 1 3.95 2.9 4.15 4.15 0 0 1 2.5 5.7 4.58 4.58 0 0 1-1.44 7.4A4.6 4.6 0 0 1 13 21.68v-6.66a1.8 1.8 0 0 1 1.7-1.2.9.9 0 0 0 0-1.81l-.18-.01a1.8 1.8 0 0 1-1.52-1.2v-8.6Q13.6 2 14.25 2" opacity={0.4} />
        <path fill="currentColor" d="M13 10.79c.22.65.8 1.13 1.52 1.2l.18.01a.9.9 0 0 1 0 1.8c-.79 0-1.46.5-1.7 1.21v6.66a5 5 0 0 1-1-.55q-.46.33-1 .55v-6.66a1.8 1.8 0 0 0-1.7-1.2.9.9 0 0 1 0-1.81l.18-.01a1.8 1.8 0 0 0 1.52-1.2v-8.6q.54.18 1 .48.46-.3 1-.48z" />
    </IconBase>
  ))
);

BrainFillDuotone.displayName = 'BrainFillDuotone';

// Triple export pattern (lucide-react style)
export { BrainFillDuotone, BrainFillDuotone as BrainFillDuotoneIcon, BrainFillDuotone as SiBrainFillDuotone };
export default BrainFillDuotone;
export type { BrainFillDuotoneProps };
