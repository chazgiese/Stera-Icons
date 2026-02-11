import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-left-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12.64 8.22a1 1 0 0 1 1.61.8v5.97a1 1 0 0 1-1.61.79l-3.85-3a1 1 0 0 1 0-1.57z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftRegularDuotone.displayName = 'ChevronFullCircleLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftRegularDuotone, ChevronFullCircleLeftRegularDuotone as ChevronFullCircleLeftRegularDuotoneIcon, ChevronFullCircleLeftRegularDuotone as SiChevronFullCircleLeftRegularDuotone };
export default ChevronFullCircleLeftRegularDuotone;
export type { ChevronFullCircleLeftRegularDuotoneProps };
