import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortNarrowRegularProps = Omit<IconBaseProps, 'children'>;

const SortNarrowRegular = memo(
  forwardRef<SVGSVGElement, SortNarrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M6 3.25c.41 0 .75.34.75.75v14.19l2.72-2.72a.75.75 0 1 1 1.06 1.06l-4 4-.11.1-.11.05-.05.02-.09.03h-.04a1 1 0 0 1-.27 0h-.01l-.06-.01-.08-.03-.08-.04-.05-.03-.11-.09-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V4c0-.41.34-.75.75-.75" />
        <path fill="currentColor" d="M22 11.25a.75.75 0 0 1 0 1.5H10a.75.75 0 0 1 0-1.5zM19 7.25a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1 0-1.5zM16 3.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

SortNarrowRegular.displayName = 'SortNarrowRegular';

// Triple export pattern (lucide-react style)
export { SortNarrowRegular, SortNarrowRegular as SortNarrowRegularIcon, SortNarrowRegular as SiSortNarrowRegular };
export type { SortNarrowRegularProps };
