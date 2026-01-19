import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ShieldCheckFillProps = Omit<IconBaseProps, 'children'>;

const ShieldCheckFill = memo(
  forwardRef<SVGSVGElement, ShieldCheckFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="shield-check-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.73 1.04a1 1 0 0 1 .62.02l8 3A1 1 0 0 1 21 5v5.58a13 13 0 0 1-7.19 11.63l-1.36.68a1 1 0 0 1-.9 0l-1.36-.68A13 13 0 0 1 3 10.58V5a1 1 0 0 1 .65-.94l8-3zm4.85 7.75a1 1 0 0 0-1.41 0l-4.69 4.69-1.56-2.08a1 1 0 1 0-1.6 1.2l1.7 2.26.29.36c.1.12.27.28.52.4q.49.2 1 .06c.26-.07.45-.2.57-.31l.33-.32 4.85-4.84a1 1 0 0 0 0-1.42" clipRule="evenodd" />
    </IconBase>
  ))
);

ShieldCheckFill.displayName = 'ShieldCheckFill';

// Triple export pattern (lucide-react style)
export { ShieldCheckFill, ShieldCheckFill as ShieldCheckFillIcon, ShieldCheckFill as SiShieldCheckFill };
export type { ShieldCheckFillProps };
