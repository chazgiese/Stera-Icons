import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-left-duotone" {...props}>
      <path fill="currentColor" d="M14.47 4.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 1 1-1.06-1.06z" />
        <path fill="currentColor" d="M15.53 18.47a.75.75 0 1 1-1.06 1.06l-7-7c.3.3.77.3 1.06 0l.53-.53z" opacity={.4} />
    </IconBase>
  ))
);

ChevronLeftRegularDuotone.displayName = 'ChevronLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronLeftRegularDuotone, ChevronLeftRegularDuotone as ChevronLeftRegularDuotoneIcon, ChevronLeftRegularDuotone as SiChevronLeftRegularDuotone };
export default ChevronLeftRegularDuotone;
export type { ChevronLeftRegularDuotoneProps };
