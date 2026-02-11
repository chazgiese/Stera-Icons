import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronUpBold = memo(
  forwardRef<SVGSVGElement, ChevronUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-up-bold" {...props}>
      <path d="M11.3 7.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1-1.4 1.4L12 9.42l-6.3 6.3a1 1 0 0 1-1.4-1.42z" />
    </IconBase>
  ))
);

ChevronUpBold.displayName = 'ChevronUpBold';

// Triple export pattern (lucide-react style)
export { ChevronUpBold, ChevronUpBold as ChevronUpBoldIcon, ChevronUpBold as SiChevronUpBold };
export default ChevronUpBold;
export type { ChevronUpBoldProps };
