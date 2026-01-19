import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines15PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines15PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines15PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-15-percent-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm-5.74-6.24c-.5.04-2.3.3-3.91.53l-2.2.33-.7.1-.2.03-.04.01h-.02a1 1 0 0 0 0 1.98h.02l.05.01.2.03a566 566 0 0 0 6.8.97H12a2 2 0 1 0-.08-4m7.08 1a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.74a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines15PercentFill.displayName = 'GaugeLines15PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeLines15PercentFill, GaugeLines15PercentFill as GaugeLines15PercentFillIcon, GaugeLines15PercentFill as SiGaugeLines15PercentFill };
export default GaugeLines15PercentFill;
export type { GaugeLines15PercentFillProps };
