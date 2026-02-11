import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerBoldDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-bold-duotone" {...props}>
      <path d="M6.84 15.75a1 1 0 1 1 1.4 1.41l-1.9 1.91a1 1 0 0 1-1.41-1.41zM15.74 15.75a1 1 0 0 1 1.42 0l1.9 1.91a1 1 0 0 1-1.4 1.41l-1.92-1.9a1 1 0 0 1 0-1.42M4.93 4.93a1 1 0 0 1 1.41 0l1.9 1.9a1 1 0 0 1-1.4 1.42l-1.91-1.9a1 1 0 0 1 0-1.42M17.65 4.93a1 1 0 0 1 1.42 1.41l-1.91 1.91a1 1 0 0 1-1.42-1.41z" opacity={0.4} />
        <path d="M12 17.3a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.7a1 1 0 0 1 1-1M5.7 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-2.7a1 1 0 0 1 0-2zM12 2a1 1 0 0 1 1 1v2.7a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SpinnerBoldDuotone.displayName = 'SpinnerBoldDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerBoldDuotone, SpinnerBoldDuotone as SpinnerBoldDuotoneIcon, SpinnerBoldDuotone as SiSpinnerBoldDuotone };
export default SpinnerBoldDuotone;
export type { SpinnerBoldDuotoneProps };
