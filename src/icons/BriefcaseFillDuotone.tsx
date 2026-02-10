import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseFillDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-fill-duotone" {...props}>
      <path d="M22 15q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H7q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q1.99 16.02 2 15v-3.2h.02l.93.33c.62.2 1.49.48 2.48.75 1.21.34 2.65.69 4.07.9v.72a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.71a36 36 0 0 0 4.07-.9 52 52 0 0 0 3.22-1.01l.2-.07H22z" opacity={0.4} />
        <path d="M2.01 9.7q0-.23.03-.42c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q5.98 5.99 7 6h10q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37l.02.4-.61.22h-.02l-.04.03-.19.06a41 41 0 0 1-3.08.97A25 25 0 0 1 12 12c-1.79 0-4.1-.5-6.04-1.04a50 50 0 0 1-3.08-.97l-.18-.06-.05-.02h-.01L2 9.66z" opacity={0.4} />
        <path fill="currentColor" d="m2.64 9.9.06.03.18.06a40 40 0 0 0 3.08.97C7.9 11.49 10.21 12 12 12s4.1-.5 6.04-1.04a50 50 0 0 0 3.08-.97l.19-.06.04-.02h.01l.62-.24q.02.58.02 1.33v.8h-.01l-.2.08a43 43 0 0 1-3.22 1 36 36 0 0 1-4.07.9v.72a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.71a36 36 0 0 1-4.07-.9 52 52 0 0 1-3.22-1.01l-.2-.07H2V11l.01-1.33zM13.78 2.75q.45 0 .8.02.27.01.57.1l.2.08.15.07a2.3 2.3 0 0 1 1.11 1.5q.08.34.14.77l.1.71h-2.02l-.06-.4-.14-.74-.1-.09h-.1l-.65-.02h-3.56l-.64.01-.12.01-.1.09q.02-.04-.02.1l-.11.64-.06.4H7.14l.11-.7q.06-.45.14-.79.07-.36.3-.74.36-.55.95-.82l.2-.08q.3-.09.58-.1.35-.03.8-.02z" />
    </IconBase>
  ))
);

BriefcaseFillDuotone.displayName = 'BriefcaseFillDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseFillDuotone, BriefcaseFillDuotone as BriefcaseFillDuotoneIcon, BriefcaseFillDuotone as SiBriefcaseFillDuotone };
export default BriefcaseFillDuotone;
export type { BriefcaseFillDuotoneProps };
