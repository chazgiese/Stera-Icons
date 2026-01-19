import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-up" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.47 7.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1-.53 1.28H5a.75.75 0 0 1-.53-1.28zM6.8 14.25h10.38L12 9.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpRegular.displayName = 'ChevronFullUpRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullUpRegular, ChevronFullUpRegular as ChevronFullUpRegularIcon, ChevronFullUpRegular as SiChevronFullUpRegular };
export default ChevronFullUpRegular;
export type { ChevronFullUpRegularProps };
