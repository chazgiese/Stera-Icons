import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-right-duotone" {...props}>
      <path fill="currentColor" d="M8.47 4.47c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L14.94 12 8.47 5.53a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" d="M8.25 5q0 .3.22.53l1.28 1.28V17.2l-1.28 1.28a.8.8 0 0 0-.22.53z" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullRightRegularDuotone.displayName = 'ChevronFullRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullRightRegularDuotone, ChevronFullRightRegularDuotone as ChevronFullRightRegularDuotoneIcon, ChevronFullRightRegularDuotone as SiChevronFullRightRegularDuotone };
export default ChevronFullRightRegularDuotone;
export type { ChevronFullRightRegularDuotoneProps };
