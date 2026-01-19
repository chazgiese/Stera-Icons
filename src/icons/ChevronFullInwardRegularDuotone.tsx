import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullInwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-inward-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18 2.25a.75.75 0 0 1 .53 1.28l-6 6c-.3.3-.77.3-1.06 0l-6-6A.75.75 0 0 1 6 2.25zm-6 5.69 4.19-4.19H7.8z" clipRule="evenodd" />
        <path fill="currentColor" fillRule="evenodd" d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.53-1.28zm-3.66 5.78h8.38L12 16.06z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullInwardRegularDuotone.displayName = 'ChevronFullInwardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardRegularDuotone, ChevronFullInwardRegularDuotone as ChevronFullInwardRegularDuotoneIcon, ChevronFullInwardRegularDuotone as SiChevronFullInwardRegularDuotone };
export default ChevronFullInwardRegularDuotone;
export type { ChevronFullInwardRegularDuotoneProps };
