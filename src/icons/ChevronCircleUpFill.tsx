import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-fill" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 6.5a1 1 0 0 0-.7.3l-4 4a1 1 0 1 0 1.4 1.4l3.3-3.29 3.3 3.3a1 1 0 1 0 1.4-1.42l-4-4a1 1 0 0 0-.7-.29" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpFill.displayName = 'ChevronCircleUpFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpFill, ChevronCircleUpFill as ChevronCircleUpFillIcon, ChevronCircleUpFill as SiChevronCircleUpFill };
export default ChevronCircleUpFill;
export type { ChevronCircleUpFillProps };
