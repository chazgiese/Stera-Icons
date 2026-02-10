import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M14.99 9.75a1 1 0 0 1 .79 1.61l-2.99 3.85a1 1 0 0 1-1.58 0l-2.99-3.85a1 1 0 0 1 .8-1.61z" />
    </IconBase>
  ))
);

ChevronFullCircleDownRegularDuotone.displayName = 'ChevronFullCircleDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownRegularDuotone, ChevronFullCircleDownRegularDuotone as ChevronFullCircleDownRegularDuotoneIcon, ChevronFullCircleDownRegularDuotone as SiChevronFullCircleDownRegularDuotone };
export default ChevronFullCircleDownRegularDuotone;
export type { ChevronFullCircleDownRegularDuotoneProps };
