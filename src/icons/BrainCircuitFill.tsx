import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitFillProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitFill = memo(
  forwardRef<SVGSVGElement, BrainCircuitFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-fill" {...props}>
      <path fill="currentColor" d="M16.5 2.25a2.55 2.55 0 0 1 .75 4.99V9.3c0 .41-.34.75-.75.75h-3.75v2.1h4.01a2.55 2.55 0 1 1 0 1.5h-4.01v1.2h1.77q.36.06.55.37l.86 1.5a2.55 2.55 0 1 1-1.3.75L14 16.35h-1.24v2.07c0 .98-.32 2.27-1.48 2.86q-.9.46-1.97.47a4.35 4.35 0 0 1-4.33-3.92 4.35 4.35 0 0 1-1.37-7.17A3.88 3.88 0 0 1 6 5.09 3.9 3.9 0 0 1 11 2.46c1.37.47 1.74 1.93 1.74 2.96v3.13h3V7.24a2.55 2.55 0 0 1 .75-4.99" />
    </IconBase>
  ))
);

BrainCircuitFill.displayName = 'BrainCircuitFill';

// Triple export pattern (lucide-react style)
export { BrainCircuitFill, BrainCircuitFill as BrainCircuitFillIcon, BrainCircuitFill as SiBrainCircuitFill };
export default BrainCircuitFill;
export type { BrainCircuitFillProps };
