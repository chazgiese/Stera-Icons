import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardFillProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardFill = memo(
  forwardRef<SVGSVGElement, ChevronOutwardFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-outward-fill" {...props}>
      <path fill="currentColor" d="M18 15a1 1 0 0 1 .7 1.7l-6 6a1 1 0 0 1-1.4 0l-6-6A1 1 0 0 1 6 15zM11.3 1.3a1 1 0 0 1 1.4 0l6 6A1 1 0 0 1 18 9H6a1 1 0 0 1-.7-1.7z" />
    </IconBase>
  ))
);

ChevronOutwardFill.displayName = 'ChevronOutwardFill';

// Triple export pattern (lucide-react style)
export { ChevronOutwardFill, ChevronOutwardFill as ChevronOutwardFillIcon, ChevronOutwardFill as SiChevronOutwardFill };
export default ChevronOutwardFill;
export type { ChevronOutwardFillProps };
