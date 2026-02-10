import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M14 16.59 9.41 12 14 7.41z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.3 4.3A1 1 0 0 1 16 5v14a1 1 0 0 1-1.7.7l-7-7a1 1 0 0 1 0-1.4zM9.4 12 14 16.59V7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronLeftFillDuotone.displayName = 'ChevronLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronLeftFillDuotone, ChevronLeftFillDuotone as ChevronLeftFillDuotoneIcon, ChevronLeftFillDuotone as SiChevronLeftFillDuotone };
export default ChevronLeftFillDuotone;
export type { ChevronLeftFillDuotoneProps };
