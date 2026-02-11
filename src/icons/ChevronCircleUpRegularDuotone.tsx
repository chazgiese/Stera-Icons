import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.75q.31 0 .53.22l4 4a.75.75 0 1 1-1.06 1.06L12 10.56l-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ChevronCircleUpRegularDuotone.displayName = 'ChevronCircleUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpRegularDuotone, ChevronCircleUpRegularDuotone as ChevronCircleUpRegularDuotoneIcon, ChevronCircleUpRegularDuotone as SiChevronCircleUpRegularDuotone };
export default ChevronCircleUpRegularDuotone;
export type { ChevronCircleUpRegularDuotoneProps };
