import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SunriseRegularDuotone = memo(
  forwardRef<SVGSVGElement, SunriseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sunrise-duotone" {...props}>
      <path d="M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 16.92a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 13.58a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.25A8.75 8.75 0 0 1 20.75 11c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75A8.75 8.75 0 0 1 12 2.25m0 1.5a7.25 7.25 0 0 0-7.21 6.5H19.2A7.25 7.25 0 0 0 12 3.75" clipRule="evenodd" />
    </IconBase>
  ))
);

SunriseRegularDuotone.displayName = 'SunriseRegularDuotone';

// Triple export pattern (lucide-react style)
export { SunriseRegularDuotone, SunriseRegularDuotone as SunriseRegularDuotoneIcon, SunriseRegularDuotone as SiSunriseRegularDuotone };
export default SunriseRegularDuotone;
export type { SunriseRegularDuotoneProps };
