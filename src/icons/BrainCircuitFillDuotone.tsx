import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrainCircuitFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrainCircuitFillDuotone = memo(
  forwardRef<SVGSVGElement, BrainCircuitFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brain-circuit-fill-duotone" {...props}>
      <path d="M14.52 14.86q.36.05.55.36l.86 1.5a2.55 2.55 0 1 1-1.3.75L14 16.35h-1.24v-1.5h1.77M19.2 10.35a2.55 2.55 0 1 1-2.44 3.3h-4.01v-1.5h4.01a2.55 2.55 0 0 1 2.44-1.8M16.5 2.25a2.55 2.55 0 0 1 .75 4.99V9.3c0 .41-.34.75-.75.75h-3.75v-1.5h3V7.24a2.55 2.55 0 0 1 .75-4.99" opacity={0.4} />
        <path d="M9.75 2.25q.67 0 1.26.2c1.37.48 1.74 1.94 1.74 2.97v13c0 .98-.32 2.27-1.48 2.86q-.9.46-1.97.47a4.35 4.35 0 0 1-4.33-3.92 4.35 4.35 0 0 1-1.37-7.17A3.88 3.88 0 0 1 6 5.09a3.9 3.9 0 0 1 3.75-2.84" />
    </IconBase>
  ))
);

BrainCircuitFillDuotone.displayName = 'BrainCircuitFillDuotone';

// Triple export pattern (lucide-react style)
export { BrainCircuitFillDuotone, BrainCircuitFillDuotone as BrainCircuitFillDuotoneIcon, BrainCircuitFillDuotone as SiBrainCircuitFillDuotone };
export default BrainCircuitFillDuotone;
export type { BrainCircuitFillDuotoneProps };
