import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines33PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeLines33PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeLines33PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-33-percent-bold" {...props}>
      <path d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.42 0l-.01-.02-2.1-2.1a1 1 0 1 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 1 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a9 9 0 0 0-4.6-1.9v1.94a1 1 0 1 1-2 0V4.52a9 9 0 0 0-7.95 7.94H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-1.49-.08A11 11 0 0 1 12 2.46" />
        <path d="M6.34 7.8a1 1 0 0 1 1.3-.1v.01h.02q0 .03.04.04l.16.12L10.2 9.6a105 105 0 0 1 3.2 2.44 2 2 0 0 1-2.82 2.83l-.06-.06c-.33-.38-1.42-1.84-2.39-3.14L6.82 9.89l-.42-.57-.11-.16-.04-.04v-.01a1 1 0 0 1 .1-1.3" />
    </IconBase>
  ))
);

GaugeLines33PercentBold.displayName = 'GaugeLines33PercentBold';

// Triple export pattern (lucide-react style)
export { GaugeLines33PercentBold, GaugeLines33PercentBold as GaugeLines33PercentBoldIcon, GaugeLines33PercentBold as SiGaugeLines33PercentBold };
export default GaugeLines33PercentBold;
export type { GaugeLines33PercentBoldProps };
