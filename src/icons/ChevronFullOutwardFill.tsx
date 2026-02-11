import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullOutwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullOutwardFill = memo(
  forwardRef<SVGSVGElement, ChevronFullOutwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-outward-fill" {...props}>
      <path d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15zM11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ChevronFullOutwardFill.displayName = 'ChevronFullOutwardFill';

// Triple export pattern (lucide-react style)
export { ChevronFullOutwardFill, ChevronFullOutwardFill as ChevronFullOutwardFillIcon, ChevronFullOutwardFill as SiChevronFullOutwardFill };
export default ChevronFullOutwardFill;
export type { ChevronFullOutwardFillProps };
