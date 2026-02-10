import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleRegularDuotone = memo(
  forwardRef<SVGSVGElement, RectangleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rectangle-duotone" {...props}>
      <path fill="currentColor" d="M3.75 13.9c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h6.8c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V12h1.5v1.9q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H8.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.93-.05-2.36V12h1.5z" opacity={.4} />
        <path fill="currentColor" d="M15.4 3.75q1.44-.01 2.36.05c.63.05 1.17.16 1.67.41.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36V12h-1.5v-1.9c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04H8.6c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24V12h-1.5v-1.9q-.01-1.44.05-2.36.05-.93.41-1.67c.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05z" />
    </IconBase>
  ))
);

RectangleRegularDuotone.displayName = 'RectangleRegularDuotone';

// Triple export pattern (lucide-react style)
export { RectangleRegularDuotone, RectangleRegularDuotone as RectangleRegularDuotoneIcon, RectangleRegularDuotone as SiRectangleRegularDuotone };
export default RectangleRegularDuotone;
export type { RectangleRegularDuotoneProps };
