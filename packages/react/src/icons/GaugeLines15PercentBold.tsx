import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeLines15PercentBoldProps = Omit<IconBaseProps, 'children'>;

const GaugeLines15PercentBold = memo(
  forwardRef<SVGSVGElement, GaugeLines15PercentBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 2.46a11 11 0 0 1 7.78 18.78 1 1 0 0 1-1.08.22l-.04-.01a1 1 0 0 1-.3-.2l-.01-.03-2.1-2.1a1 1 0 0 1 1.41-1.41l1.37 1.37a9 9 0 0 0 1.91-4.62H19a1 1 0 0 1 0-2h1.94a9 9 0 0 0-1.91-4.61l-1.38 1.37a1 1 0 0 1-1.41-1.41l1.37-1.38a9 9 0 0 0-4.6-1.9v1.94a1 1 0 1 1-2 0V4.52c-1.74.19-3.33.88-4.63 1.91l1.38 1.38a1 1 0 0 1-1.41 1.41L4.97 7.85a8.96 8.96 0 0 0 0 11.23l1.37-1.37a1 1 0 1 1 1.41 1.41l-2.1 2.1-.01.02a1 1 0 0 1-.3.2l-.04.02a1 1 0 0 1-1.15-.3A11 11 0 0 1 12 2.46" />
        <path fill="currentColor" d="M12 11.46a2 2 0 1 1 0 4h-.08c-.5-.04-2.3-.3-3.91-.53l-2.9-.44-.2-.03h-.06a1 1 0 0 1 0-1.98h.02l.05-.02.2-.02.7-.11L8 12a105 105 0 0 1 3.99-.54" />
    </IconBase>
  ))
);

GaugeLines15PercentBold.displayName = 'GaugeLines15PercentBold';

export { GaugeLines15PercentBold };
export type { GaugeLines15PercentBoldProps };
