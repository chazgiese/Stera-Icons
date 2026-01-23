import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseFillDuotone = memo(
  forwardRef<SVGSVGElement, SunriseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sunrise-fill-duotone" {...props}>
      <path d="M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 16.92a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 13.58a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M12 2.25A8.75 8.75 0 0 1 20.75 11c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75A8.75 8.75 0 0 1 12 2.25" />
    </IconBase>
  ))
);

SunriseFillDuotone.displayName = 'SunriseFillDuotone';

// Triple export pattern (lucide-react style)
export { SunriseFillDuotone, SunriseFillDuotone as SunriseFillDuotoneIcon, SunriseFillDuotone as SiSunriseFillDuotone };
export default SunriseFillDuotone;
export type { SunriseFillDuotoneProps };
