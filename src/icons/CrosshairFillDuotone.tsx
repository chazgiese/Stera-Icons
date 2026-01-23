import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairFillDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-fill-duotone" {...props}>
      <path d="M6.7 13.5a5.5 5.5 0 0 0 3.8 3.8v3.07a8.5 8.5 0 0 1-6.87-6.87zM20.37 13.5a8.5 8.5 0 0 1-6.87 6.87v-3.08a5.5 5.5 0 0 0 3.8-3.79zM13.5 3.63a8.5 8.5 0 0 1 6.87 6.87h-3.08a5.5 5.5 0 0 0-3.79-3.8zM10.5 6.7a5.5 5.5 0 0 0-3.8 3.8H3.64a8.5 8.5 0 0 1 6.87-6.87z" opacity={0.4} />
        <path fill="currentColor" d="M12 .5c.83 0 1.5.67 1.5 1.5v8.5H22a1.5 1.5 0 0 1 0 3h-8.5V22a1.5 1.5 0 0 1-3 0v-8.5H2a1.5 1.5 0 0 1 0-3h8.5V2c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

CrosshairFillDuotone.displayName = 'CrosshairFillDuotone';

// Triple export pattern (lucide-react style)
export { CrosshairFillDuotone, CrosshairFillDuotone as CrosshairFillDuotoneIcon, CrosshairFillDuotone as SiCrosshairFillDuotone };
export default CrosshairFillDuotone;
export type { CrosshairFillDuotoneProps };
