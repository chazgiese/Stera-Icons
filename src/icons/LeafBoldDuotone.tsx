import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafBoldDuotone = memo(
  forwardRef<SVGSVGElement, LeafBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="leaf-bold-duotone" {...props}>
      <path d="M21 3c0 4.05-.38 6.9-1.2 9.18a15 15 0 0 1-3.78 5.59 7.6 7.6 0 0 1-9.96.71q.41-.53.59-.72l.77-.77a5.6 5.6 0 0 0 7.19-.64 13 13 0 0 0 3.3-4.86c.65-1.78 1.02-4.1 1.08-7.48-3.84.07-6.3.57-8.04 1.29a12.4 12.4 0 0 0-4.3 3.1A5.6 5.6 0 0 0 6 15.57l-.77.77q-.24.25-.6.72a7.63 7.63 0 0 1 .6-10.1c1.32-1.3 2.7-2.6 4.96-3.52C12.42 2.53 15.43 2 20 2h1z" opacity={.4} />
        <path d="M9.38 12.2a1 1 0 0 1 1.41 1.42l-4.14 4.14c-.17.17-.61.72-1.09 1.44-.47.71-.9 1.49-1.11 2.12a1 1 0 1 1-1.9-.64c.3-.87.84-1.82 1.34-2.59a13 13 0 0 1 1.34-1.74z" />
    </IconBase>
  ))
);

LeafBoldDuotone.displayName = 'LeafBoldDuotone';

// Triple export pattern (lucide-react style)
export { LeafBoldDuotone, LeafBoldDuotone as LeafBoldDuotoneIcon, LeafBoldDuotone as SiLeafBoldDuotone };
export default LeafBoldDuotone;
export type { LeafBoldDuotoneProps };
