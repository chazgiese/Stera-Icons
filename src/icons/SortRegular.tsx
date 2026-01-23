import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortRegularProps = Omit<IconBaseProps, 'children'>;

const SortRegular = memo(
  forwardRef<SVGSVGElement, SortRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort" {...props}>
      <path fill="currentColor" d="M6 3.25c.41 0 .75.34.75.75v14.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4-.11.1-.11.05-.05.02-.09.03h-.04a1 1 0 0 1-.27 0h-.01l-.06-.01-.08-.03-.08-.04-.05-.03-.11-.09-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M16 11.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM19 7.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM22 3.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SortRegular.displayName = 'SortRegular';

// Triple export pattern (lucide-react style)
export { SortRegular, SortRegular as SortRegularIcon, SortRegular as SiSortRegular };
export default SortRegular;
export type { SortRegularProps };
