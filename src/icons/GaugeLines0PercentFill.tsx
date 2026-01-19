import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines0PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines0PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines0PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-0-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46m5.66 15.25a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm-4.25-5.66a2 2 0 0 0-2.88.06c-.33.38-1.42 1.84-2.39 3.14l-1.32 1.78-.42.58-.11.15-.04.05v.01a1 1 0 0 0 1.4 1.4v-.01q.02 0 .05-.03l.16-.12.57-.42 1.78-1.32c1.3-.97 2.76-2.06 3.15-2.39l.05-.05a2 2 0 0 0 0-2.83m-9.91.41a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.75a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines0PercentFill.displayName = 'GaugeLines0PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeLines0PercentFill, GaugeLines0PercentFill as GaugeLines0PercentFillIcon, GaugeLines0PercentFill as SiGaugeLines0PercentFill };
export type { GaugeLines0PercentFillProps };
