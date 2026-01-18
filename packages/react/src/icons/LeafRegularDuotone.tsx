import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type LeafRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LeafRegularDuotone = memo(
  forwardRef<SVGSVGElement, LeafRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M9.55 12.38a.75.75 0 0 1 1.06 1.06L6.47 17.6c-.19.18-.64.75-1.12 1.47-.47.72-.92 1.52-1.14 2.18a.75.75 0 0 1-1.42-.48c.28-.84.81-1.77 1.31-2.53s1.02-1.41 1.31-1.7z" />
        <path fill="currentColor" d="M20.75 3c0 4.04-.38 6.86-1.2 9.1a14.6 14.6 0 0 1-3.7 5.49 7.4 7.4 0 0 1-9.83.54q.3-.4.45-.54l.57-.57a5.9 5.9 0 0 0 7.74-.5 13 13 0 0 0 3.37-4.94c.68-1.87 1.05-4.28 1.1-7.83-4.02.06-6.57.57-8.4 1.32-1.92.79-3.1 1.87-4.38 3.15a5.9 5.9 0 0 0-.5 7.74l-.56.57q-.18.18-.47.54a7.4 7.4 0 0 1 .47-9.91 14 14 0 0 1 4.87-3.48c2.2-.9 5.17-1.43 9.72-1.43h.75z" opacity={.4} />
    </IconBase>
  ))
);

LeafRegularDuotone.displayName = 'LeafRegularDuotone';

// Triple export pattern (lucide-react style)
export { LeafRegularDuotone, LeafRegularDuotone as LeafRegularDuotoneIcon, LeafRegularDuotone as SiLeafRegularDuotone };
export type { LeafRegularDuotoneProps };
