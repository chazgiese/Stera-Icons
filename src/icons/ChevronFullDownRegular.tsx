import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullDownRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-down" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M18.4 8.25a1 1 0 0 1 .7 1.7l-6.57 6.58a.75.75 0 0 1-1.06 0L4.9 9.96a1 1 0 0 1 .7-1.71zM12 14.94l5.19-5.19H6.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownRegular.displayName = 'ChevronFullDownRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullDownRegular, ChevronFullDownRegular as ChevronFullDownRegularIcon, ChevronFullDownRegular as SiChevronFullDownRegular };
export default ChevronFullDownRegular;
export type { ChevronFullDownRegularProps };
