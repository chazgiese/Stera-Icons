import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortAscendingRegularProps = Omit<IconBaseProps, 'children'>;

const SortAscendingRegular = memo(
  forwardRef<SVGSVGElement, SortAscendingRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-ascending" {...props}>
      <path fill="currentColor" d="M6.08 3.25h.01l.04.01.04.01.1.03.04.02q.06.01.1.06.08.04.12.09l4 4a.75.75 0 1 1-1.06 1.06L6.75 5.81V20a.75.75 0 0 1-1.5 0V5.81L2.53 8.53a.75.75 0 1 1-1.06-1.06l4-4 .11-.1q.03 0 .05-.02l.08-.04q.04-.02.1-.03l.04-.02.15-.01zM16 19.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM19 15.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" d="M22 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SortAscendingRegular.displayName = 'SortAscendingRegular';

// Triple export pattern (lucide-react style)
export { SortAscendingRegular, SortAscendingRegular as SortAscendingRegularIcon, SortAscendingRegular as SiSortAscendingRegular };
export default SortAscendingRegular;
export type { SortAscendingRegularProps };
