import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CrosshairBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CrosshairBoldDuotone = memo(
  forwardRef<SVGSVGElement, CrosshairBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="crosshair-bold-duotone" {...props}>
      <path d="M6.08 13A6 6 0 0 0 11 17.91v2.03A8 8 0 0 1 4.06 13zM19.94 13A8 8 0 0 1 13 19.94V17.9A6 6 0 0 0 17.91 13zM13 4.06A8 8 0 0 1 19.94 11H17.9A6 6 0 0 0 13 6.08zM11 6.08A6 6 0 0 0 6.08 11H4.06A8 8 0 0 1 11 4.06z" opacity={0.4} />
        <path d="M12 1a1 1 0 0 1 1 1v9h9a1 1 0 1 1 0 2h-9v9a1 1 0 1 1-2 0v-9H2a1 1 0 1 1 0-2h9V2a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

CrosshairBoldDuotone.displayName = 'CrosshairBoldDuotone';

// Triple export pattern (lucide-react style)
export { CrosshairBoldDuotone, CrosshairBoldDuotone as CrosshairBoldDuotoneIcon, CrosshairBoldDuotone as SiCrosshairBoldDuotone };
export default CrosshairBoldDuotone;
export type { CrosshairBoldDuotoneProps };
