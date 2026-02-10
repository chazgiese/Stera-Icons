import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleDashedFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleDashedFillDuotone = memo(
  forwardRef<SVGSVGElement, RectangleDashedFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-dashed-fill-duotone" {...props}>
      <path d="M3 15a1 1 0 0 1 1 1 2.5 2.5 0 0 0 2.5 2.5 1 1 0 1 1 0 2A4.5 4.5 0 0 1 2 16a1 1 0 0 1 1-1M14.5 18.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2zM21 15a1 1 0 0 1 1 1 4.5 4.5 0 0 1-4.5 4.5 1 1 0 1 1 0-2A2.5 2.5 0 0 0 20 16a1 1 0 0 1 1-1M3 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M21 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M6.5 3.5a1 1 0 0 1 0 2A2.5 2.5 0 0 0 4 8a1 1 0 0 1-2 0 4.5 4.5 0 0 1 4.5-4.5M17.5 3.5A4.5 4.5 0 0 1 22 8a1 1 0 1 1-2 0 2.5 2.5 0 0 0-2.5-2.5 1 1 0 1 1 0-2M14.5 3.5a1 1 0 1 1 0 2h-5a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M16.29 7.5c.94 0 1.71.8 1.71 1.8v5.4c0 1-.77 1.8-1.71 1.8H7.7c-.94 0-1.71-.8-1.71-1.8V9.3c0-1 .77-1.8 1.71-1.8z" />
    </IconBase>
  ))
);

RectangleDashedFillDuotone.displayName = 'RectangleDashedFillDuotone';

// Triple export pattern (lucide-react style)
export { RectangleDashedFillDuotone, RectangleDashedFillDuotone as RectangleDashedFillDuotoneIcon, RectangleDashedFillDuotone as SiRectangleDashedFillDuotone };
export default RectangleDashedFillDuotone;
export type { RectangleDashedFillDuotoneProps };
