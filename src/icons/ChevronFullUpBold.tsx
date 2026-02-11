import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronFullUpBold = memo(
  forwardRef<SVGSVGElement, ChevronFullUpBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-up-bold" {...props}>
      <path fillRule="evenodd" d="M11.3 7.3a1 1 0 0 1 1.4 0l7 7A1 1 0 0 1 19 16H5a1 1 0 0 1-.7-1.7zM7.4 14h9.18L12 9.41z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullUpBold.displayName = 'ChevronFullUpBold';

// Triple export pattern (lucide-react style)
export { ChevronFullUpBold, ChevronFullUpBold as ChevronFullUpBoldIcon, ChevronFullUpBold as SiChevronFullUpBold };
export default ChevronFullUpBold;
export type { ChevronFullUpBoldProps };
