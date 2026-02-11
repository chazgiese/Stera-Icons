import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SpinnerFillProps = Omit<IconBaseProps, 'children'>;

const SpinnerFill = memo(
  forwardRef<SVGSVGElement, SpinnerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="spinner-fill" {...props}>
      <path d="M12 16.8c.83 0 1.5.67 1.5 1.5V21a1.5 1.5 0 0 1-3 0v-2.7c0-.83.67-1.5 1.5-1.5M6.48 15.4a1.5 1.5 0 1 1 2.12 2.12l-1.9 1.9a1.5 1.5 0 0 1-2.13-2.11zM15.4 15.4a1.5 1.5 0 0 1 2.11 0l1.91 1.9a1.5 1.5 0 0 1-2.12 2.13l-1.9-1.91a1.5 1.5 0 0 1 0-2.12M5.7 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 10.5a1.5 1.5 0 0 1 0 3h-2.7a1.5 1.5 0 0 1 0-3zM4.57 4.58a1.5 1.5 0 0 1 2.12 0l1.91 1.9a1.5 1.5 0 1 1-2.12 2.13L4.58 6.7a1.5 1.5 0 0 1 0-2.12M17.3 4.58a1.5 1.5 0 0 1 2.12 2.12l-1.9 1.9a1.5 1.5 0 0 1-2.13-2.11zM12 1.5c.83 0 1.5.67 1.5 1.5v2.7a1.5 1.5 0 0 1-3 0V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

SpinnerFill.displayName = 'SpinnerFill';

// Triple export pattern (lucide-react style)
export { SpinnerFill, SpinnerFill as SpinnerFillIcon, SpinnerFill as SiSpinnerFill };
export default SpinnerFill;
export type { SpinnerFillProps };
