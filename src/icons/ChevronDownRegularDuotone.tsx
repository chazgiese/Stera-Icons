import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-duotone" {...props}>
      <path fill="currentColor" d="M18.47 8.47a.75.75 0 1 1 1.06 1.06l-7 7a.75.75 0 1 1-1.06-1.06z" />
        <path fill="currentColor" d="M4.47 8.47c.3-.3.77-.3 1.06 0L12 14.94l-.53.53c-.3.3-.3.77 0 1.06l-7-7a.75.75 0 0 1 0-1.06" opacity={.4} />
    </IconBase>
  ))
);

ChevronDownRegularDuotone.displayName = 'ChevronDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronDownRegularDuotone, ChevronDownRegularDuotone as ChevronDownRegularDuotoneIcon, ChevronDownRegularDuotone as SiChevronDownRegularDuotone };
export default ChevronDownRegularDuotone;
export type { ChevronDownRegularDuotoneProps };
