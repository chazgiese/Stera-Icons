import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseFillProps = Omit<IconBaseProps, 'children'>;

const BriefcaseFill = memo(
  forwardRef<SVGSVGElement, BriefcaseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-fill" {...props}>
      <path d="m2.03 11.54.02.01.05.02.93.32c.61.2 1.48.48 2.46.75 1.28.36 2.8.72 4.26.93v.93c0 .41.34.75.75.75h3c.41 0 .75-.34.75-.75v-.93c1.47-.21 2.98-.57 4.26-.93a52 52 0 0 0 3.2-1l.19-.07.05-.02h.02l.03-.01V15q.01 1.02-.04 1.72c-.04.48-.12.94-.34 1.37a3.5 3.5 0 0 1-1.53 1.53c-.43.22-.89.3-1.37.34q-.7.05-1.72.04H7q-1.03.01-1.72-.04a4 4 0 0 1-1.37-.34 3.5 3.5 0 0 1-1.53-1.53c-.22-.43-.3-.89-.34-1.37Q1.99 16.02 2 15v-3.47z" />
        <path fillRule="evenodd" d="M13.78 2.75q.45 0 .8.02.27.01.57.1l.2.08.15.07a2.3 2.3 0 0 1 1.11 1.5q.08.34.14.77l.1.71H17q1.02-.01 1.72.04c.48.04.94.12 1.37.34.66.34 1.2.87 1.53 1.53.22.43.3.89.34 1.37q.03.3.03.66l-.54.2h-.01l-.05.02-.89.3c-.6.2-1.44.47-2.4.74a25 25 0 0 1-6.1 1.05c-1.83 0-4.17-.52-6.1-1.05a50 50 0 0 1-3.29-1.04l-.05-.02h-.01l-.54-.2q0-.36.03-.66c.04-.48.12-.94.34-1.37a3.5 3.5 0 0 1 1.53-1.53c.43-.22.89-.3 1.37-.34Q5.98 5.99 7 6h.14l.11-.7q.06-.45.14-.79.07-.36.3-.74.36-.55.95-.82l.2-.08q.3-.09.58-.1.35-.03.8-.02zm-3.56 2-.64.01-.12.01-.1.09q.02-.04-.02.1l-.11.64-.06.4h5.66l-.06-.4-.14-.74-.1-.09h-.1l-.65-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

BriefcaseFill.displayName = 'BriefcaseFill';

// Triple export pattern (lucide-react style)
export { BriefcaseFill, BriefcaseFill as BriefcaseFillIcon, BriefcaseFill as SiBriefcaseFill };
export default BriefcaseFill;
export type { BriefcaseFillProps };
