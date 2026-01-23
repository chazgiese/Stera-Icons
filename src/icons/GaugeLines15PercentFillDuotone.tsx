import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines15PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines15PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines15PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-15-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm-5.74-6.24c-.5.04-2.3.3-3.91.53l-2.2.33-.7.1-.2.03-.04.01h-.02a1 1 0 0 0 0 1.98h.02l.05.01.2.03a566 566 0 0 0 6.8.97H12a2 2 0 1 0-.08-4m7.08 1a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.74a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.34 17.7a1 1 0 1 1 1.41 1.42L6.7 20.18a1 1 0 0 1-1.41-1.41zM16.25 17.7a1 1 0 0 1 1.41 0l1.06 1.07a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41M12 11.46a2 2 0 1 1 0 4h-.08c-.5-.04-2.3-.3-3.91-.53l-2.9-.44-.2-.03h-.06a1 1 0 0 1 0-1.98h.02l.05-.02.2-.02L8 12a105 105 0 0 1 3.99-.54M20.5 12.46a1 1 0 0 1 0 2H19a1 1 0 0 1 0-2zM5.29 6.75a1 1 0 0 1 1.41 0L7.76 7.8a1 1 0 0 1-1.41 1.41L5.29 8.16a1 1 0 0 1 0-1.41M17.3 6.75a1 1 0 0 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41zM12 3.96a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 .01v-1.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GaugeLines15PercentFillDuotone.displayName = 'GaugeLines15PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines15PercentFillDuotone, GaugeLines15PercentFillDuotone as GaugeLines15PercentFillDuotoneIcon, GaugeLines15PercentFillDuotone as SiGaugeLines15PercentFillDuotone };
export default GaugeLines15PercentFillDuotone;
export type { GaugeLines15PercentFillDuotoneProps };
