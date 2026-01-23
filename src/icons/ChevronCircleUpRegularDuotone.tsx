import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.75q.31 0 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L12 10.56l-3.97 3.97a.75.75 0 0 1-1.06-1.06l4.5-4.5a.8.8 0 0 1 .53-.22" />
    </IconBase>
  ))
);

ChevronCircleUpRegularDuotone.displayName = 'ChevronCircleUpRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpRegularDuotone, ChevronCircleUpRegularDuotone as ChevronCircleUpRegularDuotoneIcon, ChevronCircleUpRegularDuotone as SiChevronCircleUpRegularDuotone };
export default ChevronCircleUpRegularDuotone;
export type { ChevronCircleUpRegularDuotoneProps };
