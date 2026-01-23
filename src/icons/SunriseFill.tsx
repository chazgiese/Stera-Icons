import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SunriseFillProps = Omit<IconBaseProps, 'children'>;

const SunriseFill = memo(
  forwardRef<SVGSVGElement, SunriseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sunrise-fill" {...props}>
      <path fill="currentColor" d="M14 20.25a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5zM18 16.92a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM22 13.58a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5zM12 2.25A8.75 8.75 0 0 1 20.75 11c0 .41-.34.75-.75.75H4a.75.75 0 0 1-.75-.75A8.75 8.75 0 0 1 12 2.25" />
    </IconBase>
  ))
);

SunriseFill.displayName = 'SunriseFill';

// Triple export pattern (lucide-react style)
export { SunriseFill, SunriseFill as SunriseFillIcon, SunriseFill as SiSunriseFill };
export default SunriseFill;
export type { SunriseFillProps };
