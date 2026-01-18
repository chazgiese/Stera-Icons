import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines66PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeLines66PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeLines66PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 0 1 0-2h1.94A9 9 0 0 0 13 4.52v1.95a1 1 0 1 1-2 0V4.52c-1.73.19-3.32.88-4.62 1.91l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-.3.2l-.04.02a1 1 0 0 1-1.15-.3A11 11 0 0 1 12 2.46" />
        <path fill="currentColor" d="M16.36 7.7a1 1 0 0 1 1.4 1.4v.01l-.01.01-.04.04-.11.16-.42.57-1.32 1.79a105 105 0 0 1-2.45 3.2 2 2 0 0 1-2.82-2.83l.05-.05c.39-.33 1.84-1.42 3.15-2.4l1.78-1.31.57-.42.16-.12.04-.03h.01z" />
    </IconBase>
  ))
);

GaugeLines66PercentBold.displayName = 'GaugeLines66PercentBold';

export { GaugeLines66PercentBold };
export type { GaugeLines66PercentBoldProps };
