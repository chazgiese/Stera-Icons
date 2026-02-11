import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseBoldDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 6q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v2.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q2 15.43 2 14.2v-2.4q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4Q6.57 6 7.8 6zM7.8 8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 4 11.8v2.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-2.4c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18C17.64 8 17.06 8 16.2 8z" clipRule="evenodd" opacity={.4} />
        <path d="M19.98 10.3q.02.56.02 1.5v.6q-.8.25-1.89.56c-1.08.3-2.35.61-3.61.81v.73a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.73A34 34 0 0 1 4 12.4v-.59l.01-1.5.2.06c.56.19 1.33.43 2.21.68 1.8.5 3.93.96 5.58.96s3.79-.47 5.58-.96a46 46 0 0 0 2.2-.68zM13.78 2.75q.45 0 .8.02.27.01.57.1l.2.08.15.07a2.3 2.3 0 0 1 1.11 1.5q.08.34.14.77l.1.71h-2.02l-.06-.4-.14-.74-.1-.09h-.1l-.65-.02h-3.56l-.64.01-.12.01-.1.09q.02-.04-.02.1l-.11.64-.06.4H7.14l.11-.7q.06-.45.14-.79.07-.36.3-.74.36-.55.95-.82l.2-.08q.3-.09.58-.1.35-.03.8-.02z" />
    </IconBase>
  ))
);

BriefcaseBoldDuotone.displayName = 'BriefcaseBoldDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseBoldDuotone, BriefcaseBoldDuotone as BriefcaseBoldDuotoneIcon, BriefcaseBoldDuotone as SiBriefcaseBoldDuotone };
export default BriefcaseBoldDuotone;
export type { BriefcaseBoldDuotoneProps };
