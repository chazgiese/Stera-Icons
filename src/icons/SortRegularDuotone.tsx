import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortRegularDuotone = memo(
  forwardRef<SVGSVGElement, SortRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-duotone" {...props}>
      <path d="M16 11.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5zM19 7.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM22 3.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path d="M6 3.25c.41 0 .75.34.75.75v14.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4-.11.1-.11.05-.05.02-.09.03h-.04l-.13.02h-.08l-.06-.01h-.01l-.06-.02-.08-.03-.08-.04-.05-.03-.11-.09-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

SortRegularDuotone.displayName = 'SortRegularDuotone';

// Triple export pattern (lucide-react style)
export { SortRegularDuotone, SortRegularDuotone as SortRegularDuotoneIcon, SortRegularDuotone as SiSortRegularDuotone };
export default SortRegularDuotone;
export type { SortRegularDuotoneProps };
