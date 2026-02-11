import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GaugeLines85PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines85PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines85PercentFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-85-percent-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM12 11.46a2 2 0 1 0 .08 4c.5-.04 2.3-.3 3.91-.53l2.9-.44.2-.03h.06a1 1 0 0 0 0-1.98h-.02l-.05-.02-.2-.02L16 12a105 105 0 0 0-3.91-.53zm-8.5 1a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm3.2-5.71a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines85PercentFill.displayName = 'GaugeLines85PercentFill';

// Triple export pattern (lucide-react style)
export { GaugeLines85PercentFill, GaugeLines85PercentFill as GaugeLines85PercentFillIcon, GaugeLines85PercentFill as SiGaugeLines85PercentFill };
export default GaugeLines85PercentFill;
export type { GaugeLines85PercentFillProps };
