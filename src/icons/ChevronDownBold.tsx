import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronDownBold = memo(
  forwardRef<SVGSVGElement, ChevronDownBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-down-bold" {...props}>
      <path d="M18.3 8.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronDownBold.displayName = 'ChevronDownBold';

// Triple export pattern (lucide-react style)
export { ChevronDownBold, ChevronDownBold as ChevronDownBoldIcon, ChevronDownBold as SiChevronDownBold };
export default ChevronDownBold;
export type { ChevronDownBoldProps };
