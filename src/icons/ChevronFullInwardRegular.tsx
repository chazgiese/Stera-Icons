import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-inward" {...props}>
      <path fillRule="evenodd" d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.53-1.28zm-3.66 5.78h8.38L12 16.06zM18 2.25a.75.75 0 0 1 .53 1.28l-6 6c-.3.3-.77.3-1.06 0l-6-6A.75.75 0 0 1 6 2.25zm-6 5.69 4.19-4.19H7.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullInwardRegular.displayName = 'ChevronFullInwardRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardRegular, ChevronFullInwardRegular as ChevronFullInwardRegularIcon, ChevronFullInwardRegular as SiChevronFullInwardRegular };
export default ChevronFullInwardRegular;
export type { ChevronFullInwardRegularProps };
