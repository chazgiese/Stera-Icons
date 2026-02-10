import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-fill-duotone" {...props}>
      <path d="M6.48 15.4a1.5 1.5 0 0 1 2.12 2.12l-1.9 1.9a1.5 1.5 0 0 1-2.13-2.11zM15.4 15.4a1.5 1.5 0 0 1 2.11 0l1.91 1.9a1.5 1.5 0 0 1-2.12 2.13l-1.9-1.91a1.5 1.5 0 0 1 0-2.12M4.57 4.58a1.5 1.5 0 0 1 2.12 0l1.91 1.9a1.5 1.5 0 0 1-2.12 2.13L4.58 6.7a1.5 1.5 0 0 1 0-2.12M17.3 4.58a1.5 1.5 0 0 1 2.12 2.12l-1.9 1.9a1.5 1.5 0 0 1-2.13-2.11z" opacity={0.4} />
        <path fill="currentColor" d="M12 16.8c.83 0 1.5.67 1.5 1.5V21a1.5 1.5 0 0 1-3 0v-2.7c0-.83.67-1.5 1.5-1.5M5.7 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3h-2.7a1.5 1.5 0 0 1 0-3zM12 1.5c.83 0 1.5.67 1.5 1.5v2.7a1.5 1.5 0 0 1-3 0V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

SpinnerFillDuotone.displayName = 'SpinnerFillDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerFillDuotone, SpinnerFillDuotone as SpinnerFillDuotoneIcon, SpinnerFillDuotone as SiSpinnerFillDuotone };
export default SpinnerFillDuotone;
export type { SpinnerFillDuotoneProps };
