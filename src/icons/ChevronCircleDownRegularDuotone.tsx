import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" opacity={.4} />
        <path d="M15.47 9.97a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L12 13.44z" />
    </IconBase>
  ))
);

ChevronCircleDownRegularDuotone.displayName = 'ChevronCircleDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownRegularDuotone, ChevronCircleDownRegularDuotone as ChevronCircleDownRegularDuotoneIcon, ChevronCircleDownRegularDuotone as SiChevronCircleDownRegularDuotone };
export default ChevronCircleDownRegularDuotone;
export type { ChevronCircleDownRegularDuotoneProps };
