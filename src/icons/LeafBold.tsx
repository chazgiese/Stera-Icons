import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LeafBoldProps = Omit<IconBaseProps, 'children'>;

const LeafBold = memo(
  forwardRef<SVGSVGElement, LeafBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="leaf-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M21 3c0 4.05-.38 6.9-1.2 9.18a15 15 0 0 1-3.78 5.59 7.6 7.6 0 0 1-9.96.71l-.5.72c-.47.71-.9 1.5-1.11 2.12a1 1 0 0 1-1.9-.64c.3-.87.84-1.82 1.34-2.59q.38-.56.73-1.02a7.63 7.63 0 0 1 .61-10.1c1.32-1.3 2.7-2.6 4.96-3.52C12.42 2.53 15.43 2 20 2h1zm-2.01 1.01c-3.84.07-6.3.57-8.04 1.29a12.4 12.4 0 0 0-4.3 3.1A5.6 5.6 0 0 0 6 15.57l3.38-3.37a1 1 0 0 1 1.41 1.41L7.42 17a5.6 5.6 0 0 0 7.19-.64 13 13 0 0 0 3.3-4.86c.66-1.78 1.02-4.1 1.08-7.48" clipRule="evenodd" />
    </IconBase>
  ))
);

LeafBold.displayName = 'LeafBold';

// Triple export pattern (lucide-react style)
export { LeafBold, LeafBold as LeafBoldIcon, LeafBold as SiLeafBold };
export default LeafBold;
export type { LeafBoldProps };
