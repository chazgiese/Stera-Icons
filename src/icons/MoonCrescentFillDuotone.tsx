import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="moon-crescent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.82 1.47A1 1 0 0 1 10 2.88a9 9 0 0 0 10.6 12.73 1 1 0 0 1 1.18 1.42A11 11 0 1 1 8.82 1.47M7.33 4.3a9 9 0 1 0 11.4 13.67A10.97 10.97 0 0 1 7.32 4.3" clipRule="evenodd" />
        <path fill="currentColor" d="M7.33 4.3a10.98 10.98 0 0 0 11.4 13.67A9 9 0 1 1 7.33 4.3" opacity={.4} />
    </IconBase>
  ))
);

MoonCrescentFillDuotone.displayName = 'MoonCrescentFillDuotone';

// Triple export pattern (lucide-react style)
export { MoonCrescentFillDuotone, MoonCrescentFillDuotone as MoonCrescentFillDuotoneIcon, MoonCrescentFillDuotone as SiMoonCrescentFillDuotone };
export default MoonCrescentFillDuotone;
export type { MoonCrescentFillDuotoneProps };
