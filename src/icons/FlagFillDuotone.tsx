import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagFillDuotone = memo(
  forwardRef<SVGSVGElement, FlagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flag-fill-duotone" {...props}>
      <path fill="currentColor" d="M4.9 2.14c1.98-.25 3.37-.21 4.48.02s1.9.63 2.58 1a8 8 0 0 0 2.17.86c.92.2 2.22.31 4.23.15h.16c.78.02 1.48.65 1.48 1.5v8.92c0 .78-.6 1.42-1.36 1.49-2.18.2-3.7.11-4.9-.14a10 10 0 0 1-2.7-1.06c-.69-.37-1.23-.66-2.05-.83-.7-.15-1.62-.22-2.99-.1V3.13a1 1 0 0 0-1.1-1" opacity={.4} />
        <path fill="currentColor" d="M5 2.13a1 1 0 0 1 1 1V21a1 1 0 1 1-2 0V3.13a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FlagFillDuotone.displayName = 'FlagFillDuotone';

// Triple export pattern (lucide-react style)
export { FlagFillDuotone, FlagFillDuotone as FlagFillDuotoneIcon, FlagFillDuotone as SiFlagFillDuotone };
export default FlagFillDuotone;
export type { FlagFillDuotoneProps };
