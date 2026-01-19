import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines50PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-50-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM12 5.46a1 1 0 0 0-.99.85v.07l-.04.2-.43 2.9c-.24 1.6-.5 3.4-.54 3.9v.08a2 2 0 1 0 4-.07c-.04-.5-.3-2.3-.54-3.92l-.43-2.9-.03-.19v-.05l-.01-.01a1 1 0 0 0-.99-.86m-8.5 7a1 1 0 0 0 0 2H5a1 1 0 1 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 1 0 0-2zM6.7 6.75a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 1 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.34 17.7a1 1 0 0 1 1.41 1.42L6.7 20.18a1 1 0 1 1-1.41-1.41zM16.25 17.7a1 1 0 0 1 1.41 0l1.06 1.07a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41M12 5.46a1 1 0 0 1 .99.86v.060000000000000005l.04.2.43 2.9a105 105 0 0 1 .54 3.98 2 2 0 0 1-4 0v-.07c.04-.5.3-2.3.54-3.92l.43-2.9.03-.19v-.05l.01-.01a1 1 0 0 1 .99-.86M5 12.46a1 1 0 0 1 0 2H3.5a1 1 0 1 1 0-2zM20.5 12.46a1 1 0 0 1 0 2H19a1 1 0 1 1 0-2zM5.29 6.75a1 1 0 0 1 1.41 0L7.76 7.8a1 1 0 0 1-1.41 1.41L5.29 8.16a1 1 0 0 1 0-1.41M17.3 6.75a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 1 1-1.41-1.41z" />
    </IconBase>
  ))
);

GaugeLines50PercentFillDuotone.displayName = 'GaugeLines50PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines50PercentFillDuotone, GaugeLines50PercentFillDuotone as GaugeLines50PercentFillDuotoneIcon, GaugeLines50PercentFillDuotone as SiGaugeLines50PercentFillDuotone };
export type { GaugeLines50PercentFillDuotoneProps };
