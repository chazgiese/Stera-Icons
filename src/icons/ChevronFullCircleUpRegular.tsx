import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-up" {...props}>
      <path d="M11.21 8.8a1 1 0 0 1 1.58 0l2.99 3.84a1 1 0 0 1-.8 1.61H9.02a1 1 0 0 1-.79-1.61z" />
        <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpRegular.displayName = 'ChevronFullCircleUpRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpRegular, ChevronFullCircleUpRegular as ChevronFullCircleUpRegularIcon, ChevronFullCircleUpRegular as SiChevronFullCircleUpRegular };
export default ChevronFullCircleUpRegular;
export type { ChevronFullCircleUpRegularProps };
