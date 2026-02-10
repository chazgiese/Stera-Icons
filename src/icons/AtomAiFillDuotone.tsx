import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomAiFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AtomAiFillDuotone = memo(
  forwardRef<SVGSVGElement, AtomAiFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-ai-fill-duotone" {...props}>
      <path d="M8.2 8.6a1.5 1.5 0 0 1 2.15 2.1 24 24 0 0 0-4.1 5.53 7 7 0 0 0-.75 2.27q.12.01.37-.04.86-.15 2.28-.9a1.5 1.5 0 0 1 1.43 2.63 11 11 0 0 1-3.17 1.22c-.93.17-2.19.17-3.09-.73-.84-.84-.9-2-.77-2.88.14-.92.52-1.93 1.02-2.92A27 27 0 0 1 8.2 8.6M17.58 2.6c.93-.18 2.2-.19 3.1.72.84.84.9 2 .77 2.88a10 10 0 0 1-1.02 2.93c-1.01 2-2.68 4.28-4.65 6.28a1.5 1.5 0 0 1-2.14-2.1 24 24 0 0 0 4.11-5.53 7 7 0 0 0 .75-2.28q-.11 0-.38.04-.86.14-2.3.92a1.5 1.5 0 1 1-1.43-2.64 11 11 0 0 1 3.19-1.23" opacity={0.4} />
        <path fill="currentColor" d="M8.59 13.68a1.5 1.5 0 0 1 2.12-.02 24 24 0 0 0 5.52 4.1 7 7 0 0 0 2.27.74q.01-.12-.04-.37-.15-.85-.9-2.28a1.5 1.5 0 0 1 2.63-1.43 11 11 0 0 1 1.22 3.17c.17.93.17 2.19-.73 3.09-.84.84-2 .9-2.88.77a10 10 0 0 1-2.92-1.02c-2-1-4.28-2.67-6.27-4.63a1.5 1.5 0 0 1-.02-2.12M3.32 3.32c.84-.84 2-.9 2.88-.77.92.14 1.93.52 2.92 1.02A27 27 0 0 1 15.4 8.2a1.5 1.5 0 0 1-2.1 2.14 24 24 0 0 0-5.53-4.1A7 7 0 0 0 5.5 5.5q-.01.12.04.38.15.85.91 2.29A1.5 1.5 0 0 1 3.82 9.6a11 11 0 0 1-1.23-3.18c-.17-.93-.18-2.2.73-3.1" />
    </IconBase>
  ))
);

AtomAiFillDuotone.displayName = 'AtomAiFillDuotone';

// Triple export pattern (lucide-react style)
export { AtomAiFillDuotone, AtomAiFillDuotone as AtomAiFillDuotoneIcon, AtomAiFillDuotone as SiAtomAiFillDuotone };
export default AtomAiFillDuotone;
export type { AtomAiFillDuotoneProps };
