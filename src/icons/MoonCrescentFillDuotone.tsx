import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.57 2.3a1 1 0 0 1 1.15 1.39 8 8 0 0 0 9.23 11.07 1 1 0 0 1 1.15 1.39A10 10 0 1 1 9.57 2.3M8.2 4.95A8 8 0 1 0 18.24 17H18A10 10 0 0 1 8.21 4.95" clipRule="evenodd" />
        <path fill="currentColor" d="M8.21 4.95A10 10 0 0 0 18.24 17 8 8 0 1 1 8.21 4.96" opacity={.4} />
    </IconBase>
  ))
);

MoonCrescentFillDuotone.displayName = 'MoonCrescentFillDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentFillDuotone, MoonCrescentFillDuotone as MoonCrescentFillDuotoneIcon, MoonCrescentFillDuotone as SiMoonCrescentFillDuotone };
export default MoonCrescentFillDuotone;
export type { MoonCrescentFillDuotoneProps };
