import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 8a1 1 0 0 1 .7 1.7l-7 7a1 1 0 0 1-1.4 0l-7-7A1 1 0 0 1 5 8zm-7 6.59L16.59 10H7.4z" clipRule="evenodd" />
        <path fill="currentColor" d="M16.59 10 12 14.59 7.41 10z" opacity={.4} />
    </IconBase>
  ))
);

ChevronDownFillDuotone.displayName = 'ChevronDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronDownFillDuotone, ChevronDownFillDuotone as ChevronDownFillDuotoneIcon, ChevronDownFillDuotone as SiChevronDownFillDuotone };
export default ChevronDownFillDuotone;
export type { ChevronDownFillDuotoneProps };
