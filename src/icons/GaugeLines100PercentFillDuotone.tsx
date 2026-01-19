import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines100PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines100PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines100PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-100-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m5.66-5.66a2 2 0 1 0-2.77 2.88c.39.33 1.84 1.42 3.15 2.39l1.78 1.32.57.42.16.12.04.03h.01v.01a1 1 0 0 0 1.4-1.4v-.01l-.04-.05-.11-.15-1.74-2.36a105 105 0 0 0-2.4-3.14zm-9.91.41a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.75a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.34 17.7a1 1 0 1 1 1.41 1.42L6.7 20.18a1 1 0 0 1-1.41-1.41zM10.59 12.05a2 2 0 0 1 2.82 0l.06.06c.33.38 1.42 1.84 2.39 3.14l1.32 1.78.42.58.11.15.04.05v.01a1 1 0 0 1-1.4 1.4v-.01q-.03 0-.05-.03l-.16-.12-.57-.42-1.78-1.32a105 105 0 0 1-3.2-2.44 2 2 0 0 1 0-2.83M5 12.46a1 1 0 0 1 0 2H3.5a1 1 0 0 1 0-2zM20.5 12.46a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2zM5.29 6.75a1 1 0 0 1 1.41 0L7.76 7.8a1 1 0 0 1-1.41 1.41L5.29 8.16a1 1 0 0 1 0-1.41M17.3 6.75a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41zM12 3.96a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 .01v-1.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GaugeLines100PercentFillDuotone.displayName = 'GaugeLines100PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines100PercentFillDuotone, GaugeLines100PercentFillDuotone as GaugeLines100PercentFillDuotoneIcon, GaugeLines100PercentFillDuotone as SiGaugeLines100PercentFillDuotone };
export default GaugeLines100PercentFillDuotone;
export type { GaugeLines100PercentFillDuotoneProps };
