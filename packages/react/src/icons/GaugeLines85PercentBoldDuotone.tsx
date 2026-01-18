import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines85PercentBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeLines85PercentBoldDuotone = memo(
  forwardRef<SVGSVGElement, GaugeLines85PercentBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a8.96 8.96 0 0 0 0-11.23l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a9 9 0 0 0-4.6-1.9v1.94a1 1 0 1 1-2 0V4.52c-1.74.19-3.33.88-4.63 1.91l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a9 9 0 0 0-1.91 4.61H5a1 1 0 1 1 0 2H3.06c.19 1.74.87 3.32 1.9 4.62l1.38-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-.3.2l-.04.02a1 1 0 0 1-1.15-.3A11 11 0 0 1 12 2.46" opacity={.4} />
        <path fill="currentColor" d="M12.08 11.47c.5.04 2.3.3 3.91.53l2.9.44.2.02.04.01h.02a1 1 0 0 1 0 1.98h-.02l-.05.01-.2.03a567 567 0 0 1-6.8.97H12a2 2 0 0 1 0-4z" />
    </IconBase>
  ))
);

GaugeLines85PercentBoldDuotone.displayName = 'GaugeLines85PercentBoldDuotone';

export { GaugeLines85PercentBoldDuotone };
export type { GaugeLines85PercentBoldDuotoneProps };
