import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerFillProps = Omit<IconBaseProps, 'children'>;

const SpinnerFill = memo(
  forwardRef<SVGSVGElement, SpinnerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-fill" {...props}>
      <path d="M12 17.5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0v-3c0-.83.67-1.5 1.5-1.5M5.99 15.9A1.5 1.5 0 1 1 8.1 18l-2.12 2.12a1.5 1.5 0 1 1-2.12-2.12zM15.89 15.9a1.5 1.5 0 0 1 2.12 0L20.13 18A1.5 1.5 0 1 1 18 20.13l-2.12-2.12a1.5 1.5 0 0 1 0-2.12M5 10.5a1.5 1.5 0 0 1 0 3H2a1.5 1.5 0 0 1 0-3zM22 10.5a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 1 0-3zM3.86 3.87a1.5 1.5 0 0 1 2.13 0L8.1 5.99a1.5 1.5 0 0 1-2.12 2.12L3.86 6a1.5 1.5 0 0 1 0-2.12M18 3.87a1.5 1.5 0 1 1 2.13 2.12L18 8.11A1.5 1.5 0 1 1 15.89 6zM12 .5c.83 0 1.5.67 1.5 1.5v3a1.5 1.5 0 0 1-3 0V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

SpinnerFill.displayName = 'SpinnerFill';

// Triple export pattern (lucide-react style)
export { SpinnerFill, SpinnerFill as SpinnerFillIcon, SpinnerFill as SiSpinnerFill };
export default SpinnerFill;
export type { SpinnerFillProps };
