import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-right" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.71 4.3c.28-.11.6-.04.82.17l7 7c.3.3.3.77 0 1.06l-7 7A.75.75 0 0 1 8.25 19V5c0-.3.18-.58.46-.7M9.75 17.2 14.94 12 9.75 6.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullRightRegular.displayName = 'ChevronFullRightRegular';

// Triple export pattern (lucide-react style)
export { ChevronFullRightRegular, ChevronFullRightRegular as ChevronFullRightRegularIcon, ChevronFullRightRegular as SiChevronFullRightRegular };
export default ChevronFullRightRegular;
export type { ChevronFullRightRegularProps };
