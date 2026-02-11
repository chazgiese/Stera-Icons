import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LeafRegularProps = Omit<IconBaseProps, 'children'>;

const LeafRegular = memo(
  forwardRef<SVGSVGElement, LeafRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="leaf" {...props}>
      <path fillRule="evenodd" d="M20.75 3c0 4.04-.38 6.86-1.2 9.1a14.6 14.6 0 0 1-3.7 5.49 7.4 7.4 0 0 1-9.83.54 16 16 0 0 0-.67.93c-.47.72-.92 1.52-1.14 2.18a.75.75 0 0 1-1.42-.48c.28-.84.81-1.77 1.31-2.53q.46-.66.84-1.16a7.4 7.4 0 0 1 .47-9.91 14 14 0 0 1 4.87-3.48c2.2-.9 5.17-1.43 9.72-1.43h.75zm-1.5.75c-4.01.06-6.57.57-8.4 1.32-1.92.79-3.1 1.87-4.38 3.15a5.9 5.9 0 0 0-.5 7.74l3.58-3.58a.75.75 0 0 1 1.06 1.07l-3.57 3.57a5.9 5.9 0 0 0 7.74-.5 13 13 0 0 0 3.37-4.94c.68-1.87 1.05-4.28 1.1-7.83" clipRule="evenodd" />
    </IconBase>
  ))
);

LeafRegular.displayName = 'LeafRegular';

// Triple export pattern (lucide-react style)
export { LeafRegular, LeafRegular as LeafRegularIcon, LeafRegular as SiLeafRegular };
export default LeafRegular;
export type { LeafRegularProps };
