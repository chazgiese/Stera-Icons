import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M14 16.59 9.41 12 14 7.41z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M14.3 4.3A1 1 0 0 1 16 5v14a1 1 0 0 1-1.7.7l-7-7a1 1 0 0 1 0-1.4zM9.4 12 14 16.59V7.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullLeftFillDuotone.displayName = 'ChevronFullLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullLeftFillDuotone, ChevronFullLeftFillDuotone as ChevronFullLeftFillDuotoneIcon, ChevronFullLeftFillDuotone as SiChevronFullLeftFillDuotone };
export default ChevronFullLeftFillDuotone;
export type { ChevronFullLeftFillDuotoneProps };
