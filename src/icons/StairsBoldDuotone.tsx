import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StairsBoldDuotone = memo(
  forwardRef<SVGSVGElement, StairsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-bold-duotone" {...props}>
      <path d="M2.5 16.83a1 1 0 0 0 1 1h1v4.67a1 1 0 1 1-2 0zM10.19 9.17h-.02a1 1 0 1 0 0 2h1v5.66a1 1 0 0 1-1 1h-.02.02a1 1 0 0 0 0-2h-1v-5.66a1 1 0 0 1 1-1zM15.83 3.5a1 1 0 0 0 1 1h1v5.65a1 1 0 0 0-1-.98h-1z" opacity={0.4} />
        <path fill="currentColor" d="M10.17 15.83a1 1 0 0 1 0 2H3.5a1 1 0 1 1 0-2zM16.83 9.17a1 1 0 0 1 0 2h-6.66a1 1 0 1 1 0-2zM22.5 2.5a1 1 0 0 1 0 2h-5.67a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

StairsBoldDuotone.displayName = 'StairsBoldDuotone';

// Triple export pattern (lucide-react style)
export { StairsBoldDuotone, StairsBoldDuotone as StairsBoldDuotoneIcon, StairsBoldDuotone as SiStairsBoldDuotone };
export default StairsBoldDuotone;
export type { StairsBoldDuotoneProps };
