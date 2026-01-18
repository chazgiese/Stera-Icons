import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines50PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines50PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines50PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 0 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a8.96 8.96 0 0 0-11.23 0l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-.3.2l-.04.02a1 1 0 0 1-1.15-.3A11 11 0 0 1 12 2.46" opacity={.4} />
        <path fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" d="M12 14.46a1 1 0 0 0 1-1c-.07-.92-1-7-1-7s-.93 6.08-1 7a1 1 0 0 0 1 1Z" />
    </IconBase>
  ))
);

GaugeLines50PercentBoldDuotone.displayName = 'GaugeLines50PercentBoldDuotone';

export { GaugeLines50PercentBoldDuotone };
export type { GaugeLines50PercentBoldDuotoneProps };
