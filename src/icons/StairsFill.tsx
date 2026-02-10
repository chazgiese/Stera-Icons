import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StairsFillProps = Omit<IconBaseProps, 'children'>;

const StairsFill = memo(
  forwardRef<SVGSVGElement, StairsFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="stairs-fill" {...props}>
      <path fill="currentColor" d="M21.5 3a1.5 1.5 0 0 1 0 3H18v4.5c0 .83-.67 1.5-1.5 1.5H12v4.5c0 .83-.67 1.5-1.5 1.5H6v3.5a1.5 1.5 0 0 1-3 0v-5c0-.83.67-1.5 1.5-1.5H9v-4.5c0-.83.67-1.5 1.5-1.5H15V4.5c0-.83.67-1.5 1.5-1.5z" />
    </IconBase>
  ))
);

StairsFill.displayName = 'StairsFill';

// Triple export pattern (lucide-react style)
export { StairsFill, StairsFill as StairsFillIcon, StairsFill as SiStairsFill };
export default StairsFill;
export type { StairsFillProps };
