import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines85PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines85PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines85PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="gauge-lines-85-percent-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m9.91 0a1 1 0 0 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zM12 11.46a2 2 0 1 0 .08 4c.5-.04 2.3-.3 3.91-.53l2.9-.44.2-.03h.06a1 1 0 0 0 0-1.98h-.02l-.05-.02-.2-.02L16 12a105 105 0 0 0-3.91-.53zm-8.5 1a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm3.2-5.71a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.34 17.7a1 1 0 1 1 1.41 1.42L6.7 20.18a1 1 0 0 1-1.41-1.41zM16.25 17.7a1 1 0 0 1 1.41 0l1.06 1.07a1 1 0 0 1-1.41 1.41l-1.06-1.06a1 1 0 0 1 0-1.41M12.08 11.47c.5.04 2.3.3 3.91.53l2.9.44.2.02.04.01h.02a1 1 0 0 1 0 1.98h-.02l-.05.01-.2.03a567 567 0 0 1-6.8.97H12a2 2 0 0 1 0-4zM5 12.46a1 1 0 0 1 0 2H3.5a1 1 0 0 1 0-2zM5.29 6.75a1 1 0 0 1 1.41 0L7.76 7.8a1 1 0 0 1-1.41 1.41L5.29 8.16a1 1 0 0 1 0-1.41M17.3 6.75a1 1 0 1 1 1.41 1.41l-1.06 1.06a1 1 0 0 1-1.41-1.41zM12 3.96a1 1 0 0 1 1 1v1.5a1 1 0 0 1-2 .01v-1.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

GaugeLines85PercentFillDuotone.displayName = 'GaugeLines85PercentFillDuotone';

// Triple export pattern (lucide-react style)
export { GaugeLines85PercentFillDuotone, GaugeLines85PercentFillDuotone as GaugeLines85PercentFillDuotoneIcon, GaugeLines85PercentFillDuotone as SiGaugeLines85PercentFillDuotone };
export type { GaugeLines85PercentFillDuotoneProps };
