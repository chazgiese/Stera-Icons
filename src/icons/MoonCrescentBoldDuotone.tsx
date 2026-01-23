import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-bold-duotone" {...props}>
      <path fill="currentColor" d="M8.22 1.97a1 1 0 1 1 1.78.91 9 9 0 0 0 10.6 12.73 1 1 0 0 1 .58 1.92A11 11 0 0 1 8.22 1.97" opacity={.4} />
        <path fill="currentColor" d="M21.77 17.05A11 11 0 1 1 8.8 1.47a1 1 0 0 0-.58.5q-.57 1.1-.89 2.33a9 9 0 1 0 11.4 13.67q1.26-.08 2.45-.44a1 1 0 0 0 .59-.48" />
    </IconBase>
  ))
);

MoonCrescentBoldDuotone.displayName = 'MoonCrescentBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentBoldDuotone, MoonCrescentBoldDuotone as MoonCrescentBoldDuotoneIcon, MoonCrescentBoldDuotone as SiMoonCrescentBoldDuotone };
export default MoonCrescentBoldDuotone;
export type { MoonCrescentBoldDuotoneProps };
