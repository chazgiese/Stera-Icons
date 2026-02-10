import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m2.5 7.01c0-1.04-1.2-1.62-2.02-.99l-3.84 3c-.64.5-.64 1.47 0 1.97l3.84 2.99c.82.63 2.02.05 2.02-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFill.displayName = 'ChevronFullCircleLeftFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftFill, ChevronFullCircleLeftFill as ChevronFullCircleLeftFillIcon, ChevronFullCircleLeftFill as SiChevronFullCircleLeftFill };
export default ChevronFullCircleLeftFill;
export type { ChevronFullCircleLeftFillProps };
