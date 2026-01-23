import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-up-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 7.5a1 1 0 0 0-.7.3l-4.5 4.5a1 1 0 1 0 1.4 1.4l3.8-3.79 3.8 3.8a1 1 0 1 0 1.4-1.42l-4.5-4.5a1 1 0 0 0-.7-.29" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpFill.displayName = 'ChevronCircleUpFill';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpFill, ChevronCircleUpFill as ChevronCircleUpFillIcon, ChevronCircleUpFill as SiChevronCircleUpFill };
export default ChevronCircleUpFill;
export type { ChevronCircleUpFillProps };
