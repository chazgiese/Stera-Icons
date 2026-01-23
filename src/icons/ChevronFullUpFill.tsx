import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-up-fill" {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 .7.3l7 7A1 1 0 0 1 19 16H5l-.15-.01a1 1 0 0 1-.56-1.7l7-7A1 1 0 0 1 12 7" />
    </IconBase>
  ))
);

ChevronFullUpFill.displayName = 'ChevronFullUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullUpFill, ChevronFullUpFill as ChevronFullUpFillIcon, ChevronFullUpFill as SiChevronFullUpFill };
export default ChevronFullUpFill;
export type { ChevronFullUpFillProps };
