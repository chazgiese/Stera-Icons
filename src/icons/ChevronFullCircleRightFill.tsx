import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m-.72 6.54a1.25 1.25 0 0 0-2.03.98v6.96a1.25 1.25 0 0 0 2.03.98l4.35-3.48c.63-.5.63-1.46 0-1.96z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightFill.displayName = 'ChevronFullCircleRightFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightFill, ChevronFullCircleRightFill as ChevronFullCircleRightFillIcon, ChevronFullCircleRightFill as SiChevronFullCircleRightFill };
export default ChevronFullCircleRightFill;
export type { ChevronFullCircleRightFillProps };
