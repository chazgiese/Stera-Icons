import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsBoldDuotone = memo(
  forwardRef<SVGSVGElement, StairsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-bold-duotone" {...props}>
      <path d="M3.5 16.5a1 1 0 0 0 1 1h1v4a1 1 0 1 1-2 0zM9.5 10.5a1 1 0 0 0 1 1h1v5a1 1 0 0 0-1-1h-1zM15.5 4.5a1 1 0 0 0 1 1h1v5a1 1 0 0 0-1-1h-1z" opacity={0.4} />
        <path d="M10.5 15.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM16.5 9.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM21.5 3.5a1 1 0 1 1 0 2h-5a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

StairsBoldDuotone.displayName = 'StairsBoldDuotone';

// Triple export pattern (lucide-react style)
export { StairsBoldDuotone, StairsBoldDuotone as StairsBoldDuotoneIcon, StairsBoldDuotone as SiStairsBoldDuotone };
export default StairsBoldDuotone;
export type { StairsBoldDuotoneProps };
