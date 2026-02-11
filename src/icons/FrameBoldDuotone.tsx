import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FrameBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameBoldDuotone = memo(
  forwardRef<SVGSVGElement, FrameBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.5 6.5a1 1 0 0 0 1 1h1v9h-1a1 1 0 0 0-1 1v1h-9v-1a1 1 0 0 0-1-1h-1v-9h1a1 1 0 0 0 1-1v-1h9zm-9 10h9v-9h-9z" clipRule="evenodd" opacity={.4} />
        <path d="M6.5 16.5a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0v-2.5H3a1 1 0 1 1 0-2zM21 16.5a1 1 0 1 1 0 2h-2.5V21a1 1 0 1 1-2 0v-3.5a1 1 0 0 1 1-1zM6.5 2a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h2.5V3a1 1 0 0 1 1-1M17.5 2a1 1 0 0 1 1 1v2.5H21a1 1 0 1 1 0 2h-3.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FrameBoldDuotone.displayName = 'FrameBoldDuotone';

// Triple export pattern (lucide-react style)
export { FrameBoldDuotone, FrameBoldDuotone as FrameBoldDuotoneIcon, FrameBoldDuotone as SiFrameBoldDuotone };
export default FrameBoldDuotone;
export type { FrameBoldDuotoneProps };
