import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m.99 6.64a1.25 1.25 0 0 0-1.98 0l-2.99 3.84c-.63.82-.05 2.02 1 2.02h5.97c1.04 0 1.62-1.2.99-2.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpFill.displayName = 'ChevronFullCircleUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpFill, ChevronFullCircleUpFill as ChevronFullCircleUpFillIcon, ChevronFullCircleUpFill as SiChevronFullCircleUpFill };
export default ChevronFullCircleUpFill;
export type { ChevronFullCircleUpFillProps };
