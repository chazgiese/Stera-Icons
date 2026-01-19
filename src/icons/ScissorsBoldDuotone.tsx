import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScissorsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScissorsBoldDuotone = memo(
  forwardRef<SVGSVGElement, ScissorsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scissors-bold-duotone" {...props}>
      <path d="M22.28 16.48a.5.5 0 0 1 .2.66 1.8 1.8 0 0 1-2.14.9l-9.04-2.77-.4-.16 4.51-2.6z" opacity={0.4} />
        <path fillRule="evenodd" d="M1.5 5.63a3.5 3.5 0 0 1 6.43 2.56l1.33.77q-.31.4-.5.88l-.37.93-1.46-.85A3.5 3.5 0 0 1 1.5 5.63m3.78.45a1.5 1.5 0 1 0-1.5 2.6 1.5 1.5 0 0 0 1.5-2.6" clipRule="evenodd" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.3 5.85a1.8 1.8 0 0 1 2.14.9.5.5 0 0 1-.19.66L7.9 15.69a3.5 3.5 0 1 1-1-1.73l1.71-.99 1.08-2.76a2.5 2.5 0 0 1 1.57-1.48zm-14.5 9.9a1.5 1.5 0 1 0-2.6 1.5 1.5 1.5 0 0 0 2.6-1.5m5.7-5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
    </IconBase>
  ))
);

ScissorsBoldDuotone.displayName = 'ScissorsBoldDuotone';

// Triple export pattern (lucide-react style)
export { ScissorsBoldDuotone, ScissorsBoldDuotone as ScissorsBoldDuotoneIcon, ScissorsBoldDuotone as SiScissorsBoldDuotone };
export default ScissorsBoldDuotone;
export type { ScissorsBoldDuotoneProps };
