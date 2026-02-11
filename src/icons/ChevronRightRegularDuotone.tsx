import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-right-duotone" {...props}>
      <path d="M8.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06" />
        <path d="M15.47 12.53c.3.3.77.3 1.06 0l-7 7a.75.75 0 0 1-1.06-1.06L14.94 12z" opacity={.4} />
    </IconBase>
  ))
);

ChevronRightRegularDuotone.displayName = 'ChevronRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronRightRegularDuotone, ChevronRightRegularDuotone as ChevronRightRegularDuotoneIcon, ChevronRightRegularDuotone as SiChevronRightRegularDuotone };
export default ChevronRightRegularDuotone;
export type { ChevronRightRegularDuotoneProps };
