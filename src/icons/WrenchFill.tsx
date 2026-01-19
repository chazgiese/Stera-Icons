import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WrenchFillProps = Omit<IconBaseProps, 'children'>;

const WrenchFill = memo(
  forwardRef<SVGSVGElement, WrenchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="wrench-fill" {...props}>
      <path fill="currentColor" d="M9.63 4.33a7.1 7.1 0 0 1 6.61-1.9c1.04.24 1.2 1.45.57 2.08l-2.83 2.83.52 2.16 2.16.52 2.83-2.83c.59-.59 1.7-.48 2.03.38l.05.19.09.43a7.1 7.1 0 0 1-9.01 7.96l-4.6 4.6a3.4 3.4 0 0 1-4.8-4.8l4.6-4.6a7.1 7.1 0 0 1 1.78-7.02" />
    </IconBase>
  ))
);

WrenchFill.displayName = 'WrenchFill';

// Triple export pattern (lucide-react style)
export { WrenchFill, WrenchFill as WrenchFillIcon, WrenchFill as SiWrenchFill };
export type { WrenchFillProps };
