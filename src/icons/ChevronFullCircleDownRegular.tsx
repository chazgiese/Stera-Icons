import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down" {...props}>
      <path fill="currentColor" d="M14.99 9.75a1 1 0 0 1 .79 1.61l-3 3.85a1 1 0 0 1-1.57 0l-2.99-3.85a1 1 0 0 1 .8-1.61z" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownRegular.displayName = 'ChevronFullCircleDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownRegular, ChevronFullCircleDownRegular as ChevronFullCircleDownRegularIcon, ChevronFullCircleDownRegular as SiChevronFullCircleDownRegular };
export default ChevronFullCircleDownRegular;
export type { ChevronFullCircleDownRegularProps };
