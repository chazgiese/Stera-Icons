import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines100PercentFillProps = Omit<IconBaseProps, 'children'>;

const GaugeLines100PercentFill = memo(
  forwardRef<SVGSVGElement, GaugeLines100PercentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-.7.3H4.92a1 1 0 0 1-.7-.3A11 11 0 0 1 12 2.46M7.75 17.71a1 1 0 0 0-1.41 0l-1.06 1.06a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41m5.66-5.66a2 2 0 1 0-2.77 2.88c.39.33 1.84 1.42 3.15 2.39l1.78 1.32.57.42.16.12.04.03h.01v.01a1 1 0 0 0 1.4-1.4v-.01l-.04-.05-.11-.15-1.74-2.36a105 105 0 0 0-2.4-3.14zm-9.91.41a1 1 0 0 0 0 2H5a1 1 0 0 0 0-2zm15.5 0a1 1 0 0 0 0 2h1.5a1 1 0 0 0 0-2zM6.7 6.75a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 0 0 1.41-1.41zm12.01 0a1 1 0 0 0-1.41 0L16.24 7.8a1 1 0 0 0 1.41 1.41l1.06-1.06a1 1 0 0 0 0-1.41M12 3.96a1 1 0 0 0-1 1v1.51a1 1 0 0 0 2 0v-1.5a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

GaugeLines100PercentFill.displayName = 'GaugeLines100PercentFill';

export { GaugeLines100PercentFill };
export type { GaugeLines100PercentFillProps };
