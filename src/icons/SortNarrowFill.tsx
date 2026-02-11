import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowFillProps = Omit<IconBaseProps, 'children'>;

const SortNarrowFill = memo(
  forwardRef<SVGSVGElement, SortNarrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-narrow-fill" {...props}>
      <path d="M6 3a1 1 0 0 1 1 1v11h3a1 1 0 0 1 .7 1.7l-4 4-.07.07-.13.1H6.5a1 1 0 0 1-.66.11H5.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-4-4A1 1 0 0 1 2 15h3V4a1 1 0 0 1 1-1" />
        <path d="M22 11a1 1 0 0 1 0 2H10a1 1 0 1 1 0-2zM19 7a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2zM16 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

SortNarrowFill.displayName = 'SortNarrowFill';

// Triple export pattern (lucide-react style)
export { SortNarrowFill, SortNarrowFill as SortNarrowFillIcon, SortNarrowFill as SiSortNarrowFill };
export default SortNarrowFill;
export type { SortNarrowFillProps };
