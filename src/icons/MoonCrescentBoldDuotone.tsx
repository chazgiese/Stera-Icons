import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentBoldDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-bold-duotone" {...props}>
      <path d="M19.94 14.76a1 1 0 0 0-.66.55q-.42.9-1.04 1.69H18A10 10 0 0 1 8.21 4.95q.88-.46 1.84-.71a1 1 0 0 0 .67-.55 8 8 0 0 0 9.22 11.08M9.98 2.29" opacity={0.4} />
        <path d="M9.57 2.3a1 1 0 1 1 .48 1.94 8 8 0 1 0 9.23 11.07 1 1 0 0 1 1.82.83A10 10 0 1 1 9.57 2.3" />
    </IconBase>
  ))
);

MoonCrescentBoldDuotone.displayName = 'MoonCrescentBoldDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentBoldDuotone, MoonCrescentBoldDuotone as MoonCrescentBoldDuotoneIcon, MoonCrescentBoldDuotone as SiMoonCrescentBoldDuotone };
export default MoonCrescentBoldDuotone;
export type { MoonCrescentBoldDuotoneProps };
