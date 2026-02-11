import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusFillProps = Omit<IconBaseProps, 'children'>;

const MinusFill = memo(
  forwardRef<SVGSVGElement, MinusFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="minus-fill" {...props}>
      <path d="M21 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3z" />
    </IconBase>
  ))
);

MinusFill.displayName = 'MinusFill';

// Triple export pattern (lucide-react style)
export { MinusFill, MinusFill as MinusFillIcon, MinusFill as SiMinusFill };
export default MinusFill;
export type { MinusFillProps };
