import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortNarrowBoldProps = Omit<IconBaseProps, 'children'>;

const SortNarrowBold = memo(
  forwardRef<SVGSVGElement, SortNarrowBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="sort-narrow-bold" {...props}>
      <path d="M6 3a1 1 0 0 1 1 1v13.59l2.3-2.3a1 1 0 0 1 1.4 1.42l-4 4-.07.06-.13.1H6.5a1 1 0 0 1-.66.11H5.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-4-4a1 1 0 1 1 1.42-1.42L5 17.6V4a1 1 0 0 1 1-1" />
        <path d="M22 11a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2zM19 7a1 1 0 0 1 0 2h-9a1 1 0 0 1 0-2zM16 3a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

SortNarrowBold.displayName = 'SortNarrowBold';

// Triple export pattern (lucide-react style)
export { SortNarrowBold, SortNarrowBold as SortNarrowBoldIcon, SortNarrowBold as SiSortNarrowBold };
export default SortNarrowBold;
export type { SortNarrowBoldProps };
