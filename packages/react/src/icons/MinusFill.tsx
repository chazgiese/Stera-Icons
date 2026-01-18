import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MinusFillProps = Omit<IconBaseProps, 'children'>;

const MinusFill = memo(
  forwardRef<SVGSVGElement, MinusFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

MinusFill.displayName = 'MinusFill';

// Triple export pattern (lucide-react style)
export { MinusFill, MinusFill as MinusFillIcon, MinusFill as SiMinusFill };
export type { MinusFillProps };
