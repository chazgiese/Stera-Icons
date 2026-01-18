import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LeafFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafFillDuotone = memo(
  forwardRef<SVGSVGElement, LeafFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M21 3c0 4.05-.38 6.9-1.2 9.18a15 15 0 0 1-3.78 5.59 7.6 7.6 0 0 1-9.95.71q.4-.53.58-.72l4.14-4.14a1 1 0 0 0-1.41-1.41l-4.14 4.14q-.25.25-.62.72a7.63 7.63 0 0 1 .62-10.1c1.31-1.3 2.7-2.6 4.95-3.52C12.42 2.53 15.43 2 20 2h1z" opacity={.4} />
        <path fill="currentColor" d="M9.38 12.2a1 1 0 0 1 1.41 1.42l-4.14 4.14c-.17.17-.61.72-1.09 1.44-.47.71-.9 1.49-1.11 2.12a1 1 0 1 1-1.9-.64c.3-.87.84-1.82 1.34-2.59a13 13 0 0 1 1.34-1.74z" />
    </IconBase>
  ))
);

LeafFillDuotone.displayName = 'LeafFillDuotone';

// Triple export pattern (lucide-react style)
export { LeafFillDuotone, LeafFillDuotone as LeafFillDuotoneIcon, LeafFillDuotone as SiLeafFillDuotone };
export type { LeafFillDuotoneProps };
