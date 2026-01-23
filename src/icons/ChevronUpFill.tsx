import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronUpFill = memo(
  forwardRef<SVGSVGElement, ChevronUpFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-fill" {...props}>
      <path fill="currentColor" d="M12 7a1 1 0 0 1 .7.3l7 7A1 1 0 0 1 19 16H5l-.15-.01a1 1 0 0 1-.56-1.7l7-7A1 1 0 0 1 12 7" />
    </IconBase>
  ))
);

ChevronUpFill.displayName = 'ChevronUpFill';

// Triple export pattern (lucide-react style)
export { ChevronUpFill, ChevronUpFill as ChevronUpFillIcon, ChevronUpFill as SiChevronUpFill };
export default ChevronUpFill;
export type { ChevronUpFillProps };
