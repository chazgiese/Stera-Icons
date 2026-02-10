import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WandFillDuotone = memo(
  forwardRef<SVGSVGElement, WandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wand-fill-duotone" {...props}>
      <path d="M12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1M17.8 17.8a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4M6 11a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2zM21 11a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2zM12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1M3.8 3.8a1 1 0 0 1 1.4 0l1 1a1 1 0 1 1-1.4 1.4l-1-1a1 1 0 0 1 0-1.4M18.8 3.8a1 1 0 1 1 1.4 1.4l-1 1a1 1 0 1 1-1.4-1.4z" opacity={0.4} />
        <path fill="currentColor" d="M15.51 7.13a1 1 0 0 1 1.36 1.36L15.8 10.4c-.56 1-.56 2.2 0 3.2l1.07 1.91a1 1 0 0 1-1.36 1.36L13.6 15.8a3.3 3.3 0 0 0-3.2 0l-1.19.67a5 5 0 0 0-1.09.82l-3.91 3.92a1 1 0 0 1-1.42-1.42l3.92-3.9a5 5 0 0 0 .82-1.1l.67-1.2c.56-.98.56-2.2 0-3.19L7.13 8.5a1 1 0 0 1 1.36-1.36L10.4 8.2c1 .56 2.2.56 3.2 0z" />
    </IconBase>
  ))
);

WandFillDuotone.displayName = 'WandFillDuotone';

// Triple export pattern (lucide-react style)
export { WandFillDuotone, WandFillDuotone as WandFillDuotoneIcon, WandFillDuotone as SiWandFillDuotone };
export default WandFillDuotone;
export type { WandFillDuotoneProps };
