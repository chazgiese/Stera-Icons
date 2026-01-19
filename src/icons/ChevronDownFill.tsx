import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronDownFill = memo(
  forwardRef<SVGSVGElement, ChevronDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-fill" {...props}>
      <path fill="currentColor" d="M19 8a1 1 0 0 1 .7 1.7l-7 7a1 1 0 0 1-1.4 0l-7-7A1 1 0 0 1 5 8z" />
    </IconBase>
  ))
);

ChevronDownFill.displayName = 'ChevronDownFill';

// Triple export pattern (lucide-react style)
export { ChevronDownFill, ChevronDownFill as ChevronDownFillIcon, ChevronDownFill as SiChevronDownFill };
export default ChevronDownFill;
export type { ChevronDownFillProps };
