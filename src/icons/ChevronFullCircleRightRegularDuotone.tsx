import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M9.75 9.01a1 1 0 0 1 1.61-.79l3.85 3a1 1 0 0 1 0 1.57l-3.85 2.99a1 1 0 0 1-1.61-.8z" />
    </IconBase>
  ))
);

ChevronFullCircleRightRegularDuotone.displayName = 'ChevronFullCircleRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightRegularDuotone, ChevronFullCircleRightRegularDuotone as ChevronFullCircleRightRegularDuotoneIcon, ChevronFullCircleRightRegularDuotone as SiChevronFullCircleRightRegularDuotone };
export default ChevronFullCircleRightRegularDuotone;
export type { ChevronFullCircleRightRegularDuotoneProps };
