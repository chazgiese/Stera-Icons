import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-fill-duotone" {...props}>
      <path d="M9.5 1q.8.01 1.5.26V10a2 2 0 0 1-2 2 1 1 0 1 0 0 2 2 2 0 0 1 2 2v6.58a4.96 4.96 0 0 0-6.96-3.98 5 5 0 0 1-1.58-8.13A4.48 4.48 0 0 1 5.19 4.2 4.5 4.5 0 0 1 9.5 1M14.5 1a4.5 4.5 0 0 1 4.3 3.2 4.5 4.5 0 0 1 2.74 6.27 4.98 4.98 0 0 1-1.58 8.13A5 5 0 0 1 13 22.58V16c0-1.1.9-2 2-2a1 1 0 1 0 0-2 2 2 0 0 1-2-2V1.26Q13.7 1 14.5 1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.76q.46-.31 1-.5V10c0 1.1.9 2 2 2a1 1 0 1 1 0 2 2 2 0 0 0-2 2v6.58q-.54-.23-1-.58-.46.35-1 .58V16a2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2V1.26q.54.19 1 .5" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M13 10c0 1.1.9 2 2 2a1 1 0 1 1 0 2 2 2 0 0 0-2 2v6.58q-.54-.23-1-.58-.46.35-1 .58V16a2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2V1.26q.54.19 1 .5.46-.31 1-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BrainFillDuotone.displayName = 'BrainFillDuotone';

// Triple export pattern (lucide-react style)
export { BrainFillDuotone, BrainFillDuotone as BrainFillDuotoneIcon, BrainFillDuotone as SiBrainFillDuotone };
export default BrainFillDuotone;
export type { BrainFillDuotoneProps };
