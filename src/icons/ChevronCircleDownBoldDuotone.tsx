import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-down-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M15.8 9.8a1 1 0 0 1 1.4 1.4l-4.5 4.5a1 1 0 0 1-1.4 0l-4.5-4.5a1 1 0 1 1 1.4-1.4l3.8 3.79z" />
    </IconBase>
  ))
);

ChevronCircleDownBoldDuotone.displayName = 'ChevronCircleDownBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleDownBoldDuotone, ChevronCircleDownBoldDuotone as ChevronCircleDownBoldDuotoneIcon, ChevronCircleDownBoldDuotone as SiChevronCircleDownBoldDuotone };
export default ChevronCircleDownBoldDuotone;
export type { ChevronCircleDownBoldDuotoneProps };
