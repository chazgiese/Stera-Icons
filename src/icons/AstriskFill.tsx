import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AstriskFillProps = Omit<IconBaseProps, 'children'>;

const AstriskFill = memo(
  forwardRef<SVGSVGElement, AstriskFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk-fill" {...props}>
      <path d="M12 1.5c.83 0 1.5.67 1.5 1.5v5.53c0 .39.42.63.75.44l4.8-2.77a1.5 1.5 0 0 1 1.5 2.6l-4.8 2.76a.5.5 0 0 0 0 .87l4.8 2.77a1.5 1.5 0 0 1-1.5 2.6l-4.8-2.78a.5.5 0 0 0-.75.44V21a1.5 1.5 0 1 1-3 0v-5.54a.5.5 0 0 0-.75-.43l-4.8 2.76a1.5 1.5 0 0 1-1.5-2.6l4.8-2.76a.5.5 0 0 0 0-.87L3.46 8.79a1.5 1.5 0 0 1 1.5-2.6l4.79 2.77a.5.5 0 0 0 .75-.43V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

AstriskFill.displayName = 'AstriskFill';

// Triple export pattern (lucide-react style)
export { AstriskFill, AstriskFill as AstriskFillIcon, AstriskFill as SiAstriskFill };
export default AstriskFill;
export type { AstriskFillProps };
