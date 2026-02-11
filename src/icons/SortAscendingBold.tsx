import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingBoldProps = Omit<IconBaseProps, 'children'>;

const SortAscendingBold = memo(
  forwardRef<SVGSVGElement, SortAscendingBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-bold" {...props}>
      <path d="m6.1 3 .05.01a1 1 0 0 1 .34.12h.01l.13.1.08.06 4 4a1 1 0 0 1-1.42 1.42L7 6.4V20a1 1 0 0 1-2 0V6.41l-2.3 2.3a1 1 0 1 1-1.4-1.42l4-4a1 1 0 0 1 .4-.25h.05l.05-.02h.04L6 3zM16 19a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM19 15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2z" />
        <path d="M22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

SortAscendingBold.displayName = 'SortAscendingBold';

// Triple export pattern (lucide-react style)
export { SortAscendingBold, SortAscendingBold as SortAscendingBoldIcon, SortAscendingBold as SiSortAscendingBold };
export default SortAscendingBold;
export type { SortAscendingBoldProps };
