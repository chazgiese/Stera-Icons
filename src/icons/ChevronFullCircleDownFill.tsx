import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22M8.52 9.25a1.25 1.25 0 0 0-.98 2.03l3.48 4.35c.5.63 1.46.63 1.96 0l3.48-4.35c.65-.82.07-2.03-.98-2.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownFill.displayName = 'ChevronFullCircleDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownFill, ChevronFullCircleDownFill as ChevronFullCircleDownFillIcon, ChevronFullCircleDownFill as SiChevronFullCircleDownFill };
export type { ChevronFullCircleDownFillProps };
