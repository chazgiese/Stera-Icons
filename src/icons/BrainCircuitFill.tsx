import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BrainCircuitFillProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitFill = memo(
  forwardRef<SVGSVGElement, BrainCircuitFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-fill" {...props}>
      <path fill="currentColor" d="M17 1.25a2.75 2.75 0 0 1 1 5.31V9a1 1 0 0 1-1 1h-4.25v2h4.69a2.75 2.75 0 1 1 0 2h-4.69v1h1.94a1 1 0 0 1 .87.5l1.03 1.78q.2-.03.41-.03a2.75 2.75 0 1 1-2.15 1.03L14.11 17h-1.36v2.13c0 1.08-.35 2.47-1.6 3.1q-.98.5-2.15.52a4.75 4.75 0 0 1-4.73-4.33 4.75 4.75 0 0 1-1.5-7.9A4.23 4.23 0 0 1 5.4 4.4a4.24 4.24 0 0 1 5.48-2.91c1.46.5 1.87 2.07 1.87 3.2V8H16V6.56a2.75 2.75 0 0 1 1-5.31" />
    </IconBase>
  ))
);

BrainCircuitFill.displayName = 'BrainCircuitFill';

// Triple export pattern (lucide-react style)
export { BrainCircuitFill, BrainCircuitFill as BrainCircuitFillIcon, BrainCircuitFill as SiBrainCircuitFill };
export type { BrainCircuitFillProps };
