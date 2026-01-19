import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SpinnerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SpinnerFillDuotone = memo(
  forwardRef<SVGSVGElement, SpinnerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-fill-duotone" {...props}>
      <path d="M5.99 15.9A1.5 1.5 0 0 1 8.1 18l-2.12 2.12a1.5 1.5 0 0 1-2.13-2.12zM15.89 15.9a1.5 1.5 0 0 1 2.12 0L20.13 18A1.5 1.5 0 0 1 18 20.13l-2.12-2.12a1.5 1.5 0 0 1 0-2.12M3.86 3.87a1.5 1.5 0 0 1 2.13 0L8.1 5.99a1.5 1.5 0 1 1-2.12 2.12L3.86 6a1.5 1.5 0 0 1 0-2.12M18 3.87a1.5 1.5 0 0 1 2.13 2.12L18 8.11A1.5 1.5 0 0 1 15.89 6z" opacity={0.4} />
        <path fill="currentColor" d="M12 17.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5M5 10.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 10.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3zM12 .5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

SpinnerFillDuotone.displayName = 'SpinnerFillDuotone';

// Triple export pattern (lucide-react style)
export { SpinnerFillDuotone, SpinnerFillDuotone as SpinnerFillDuotoneIcon, SpinnerFillDuotone as SiSpinnerFillDuotone };
export default SpinnerFillDuotone;
export type { SpinnerFillDuotoneProps };
