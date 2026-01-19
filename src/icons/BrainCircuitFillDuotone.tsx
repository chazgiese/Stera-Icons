import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainCircuitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-fill-duotone" {...props}>
      <path d="M14.69 15a1 1 0 0 1 .87.5l1.03 1.78c-.7.11-1.31.48-1.74 1L14.11 17h-1.36v-2zM17.44 12a2.7 2.7 0 0 0 0 2h-4.69v-2zM18 9a1 1 0 0 1-1 1h-4.25V8H16V6.56a2.7 2.7 0 0 0 2 0z" opacity={0.4} />
        <path fill="currentColor" d="M9.5 1.25q.72 0 1.38.23c1.46.5 1.87 2.07 1.87 3.2v14.45c0 1.08-.35 2.47-1.6 3.1q-.98.5-2.15.52a4.75 4.75 0 0 1-4.73-4.33 4.75 4.75 0 0 1-1.5-7.9A4.23 4.23 0 0 1 5.4 4.4a4.24 4.24 0 0 1 4.1-3.14M17 17.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M20 10.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5M17 1.25a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5" />
    </IconBase>
  ))
);

BrainCircuitFillDuotone.displayName = 'BrainCircuitFillDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitFillDuotone, BrainCircuitFillDuotone as BrainCircuitFillDuotoneIcon, BrainCircuitFillDuotone as SiBrainCircuitFillDuotone };
export type { BrainCircuitFillDuotoneProps };
