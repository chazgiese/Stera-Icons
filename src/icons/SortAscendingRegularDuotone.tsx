import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingRegularDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending-duotone" {...props}>
      <path d="M16 19.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM19 15.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM22 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" d="M6 3.25h.09l.04.01.04.01.1.03.04.02q.06.01.1.06.08.04.12.09l4 4a.75.75 0 1 1-1.06 1.06L6.75 5.81V20a.75.75 0 0 1-1.5 0V5.81L2.53 8.53a.75.75 0 1 1-1.06-1.06l4-4 .11-.1q.03 0 .05-.02l.08-.04q.04-.02.1-.03l.04-.02z" />
    </IconBase>
  ))
);

SortAscendingRegularDuotone.displayName = 'SortAscendingRegularDuotone';

// Triple export pattern (lucide-react style)
export { SortAscendingRegularDuotone, SortAscendingRegularDuotone as SortAscendingRegularDuotoneIcon, SortAscendingRegularDuotone as SiSortAscendingRegularDuotone };
export type { SortAscendingRegularDuotoneProps };
