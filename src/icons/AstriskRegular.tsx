import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AstriskRegularProps = Omit<IconBaseProps, 'children'>;

const AstriskRegular = memo(
  forwardRef<SVGSVGElement, AstriskRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="astrisk" {...props}>
      <path fill="currentColor" d="M12 2.25c.41 0 .75.34.75.75v6.83c0 .39.42.63.75.43l5.92-3.41a.75.75 0 0 1 .75 1.3l-5.92 3.41a.5.5 0 0 0 0 .87l5.93 3.42a.75.75 0 0 1-.75 1.3l-5.93-3.43a.5.5 0 0 0-.75.44V21a.75.75 0 0 1-1.5 0v-6.84a.5.5 0 0 0-.75-.43l-5.92 3.42a.75.75 0 0 1-.75-1.3l5.92-3.42a.5.5 0 0 0 0-.87L3.84 8.15a.75.75 0 0 1 .75-1.3l5.91 3.4a.5.5 0 0 0 .75-.42V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AstriskRegular.displayName = 'AstriskRegular';

// Triple export pattern (lucide-react style)
export { AstriskRegular, AstriskRegular as AstriskRegularIcon, AstriskRegular as SiAstriskRegular };
export default AstriskRegular;
export type { AstriskRegularProps };
