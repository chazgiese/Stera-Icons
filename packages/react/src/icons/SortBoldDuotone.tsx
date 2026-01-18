import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type SortBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortBoldDuotone = memo(
  forwardRef<SVGSVGElement, SortBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16 11a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2zM19 7a1 1 0 1 1 0 2h-9a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H10a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M6 3a1 1 0 0 1 1 1v13.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4-.07.06-.13.1H6.5a1 1 0 0 1-.66.11H5.8l-.05-.01-.04-.01a1 1 0 0 1-.42-.25l-4-4a1 1 0 1 1 1.42-1.42L5 17.6V4a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

SortBoldDuotone.displayName = 'SortBoldDuotone';

// Triple export pattern (lucide-react style)
export { SortBoldDuotone, SortBoldDuotone as SortBoldDuotoneIcon, SortBoldDuotone as SiSortBoldDuotone };
export type { SortBoldDuotoneProps };
