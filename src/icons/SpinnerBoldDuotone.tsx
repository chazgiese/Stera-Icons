import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-bold-duotone" {...props}>
      <path d="M6.34 16.25a1 1 0 0 1 1.41 1.41l-2.12 2.12a1 1 0 0 1-1.41-1.41zM16.24 16.25a1 1 0 0 1 1.41 0l2.12 2.12a1 1 0 0 1-1.4 1.41l-2.13-2.12a1 1 0 0 1 0-1.41M4.22 4.22a1 1 0 0 1 1.41 0l2.12 2.12a1 1 0 1 1-1.41 1.42L4.22 5.64a1 1 0 0 1 0-1.42M18.36 4.22a1 1 0 0 1 1.41 1.42l-2.12 2.12a1 1 0 0 1-1.41-1.42z" opacity={0.4} />
        <path fill="currentColor" d="M12 18a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M5 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM12 1a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SpinnerBoldDuotone.displayName = 'SpinnerBoldDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerBoldDuotone, SpinnerBoldDuotone as SpinnerBoldDuotoneIcon, SpinnerBoldDuotone as SiSpinnerBoldDuotone };
export default SpinnerBoldDuotone;
export type { SpinnerBoldDuotoneProps };
