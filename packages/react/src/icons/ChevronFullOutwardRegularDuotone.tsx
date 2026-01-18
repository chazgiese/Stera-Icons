import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullOutwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.47 1.47c.3-.3.77-.3 1.06 0l6 6A.75.75 0 0 1 18 8.75H6a.75.75 0 0 1-.53-1.28zM7.81 7.25h8.38L12 3.06z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M18 15.25a.75.75 0 0 1 .53 1.28l-6 6c-.3.3-.77.3-1.06 0l-6-6A.75.75 0 0 1 6 15.25zm-6 5.69 4.19-4.19H7.8z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullOutwardRegularDuotone.displayName = 'ChevronFullOutwardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardRegularDuotone, ChevronFullOutwardRegularDuotone as ChevronFullOutwardRegularDuotoneIcon, ChevronFullOutwardRegularDuotone as SiChevronFullOutwardRegularDuotone };
export type { ChevronFullOutwardRegularDuotoneProps };
