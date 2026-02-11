import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 6.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v2.4q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-2.4q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v2.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-2.4c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="m20.24 10.47.01 1.33v.25q-.87.3-2.2.67c-1.14.32-2.49.64-3.8.84v.94c0 .41-.34.75-.75.75h-3a.75.75 0 0 1-.75-.75v-.94a33 33 0 0 1-3.8-.84q-1.33-.37-2.2-.67v-.25l.01-1.33.38.13c.55.19 1.33.43 2.22.68 1.79.5 3.96.97 5.64.97s3.85-.48 5.64-.97c.89-.25 1.67-.5 2.22-.68zM13.78 3q.45 0 .78.02.34 0 .7.16a2 2 0 0 1 .84.73q.2.32.27.66.07.32.13.76l.14.92h-1.51l-.11-.69-.17-.83a.5.5 0 0 0-.22-.19l-.19-.03-.66-.01h-3.56l-.85.04a.5.5 0 0 0-.22.19q0 0-.06.18l-.11.65-.1.69H7.35l.14-.92q.06-.44.13-.76.07-.34.27-.66a2 2 0 0 1 .85-.73q.35-.15.7-.16.32-.03.77-.02z" />
    </IconBase>
  ))
);

BriefcaseRegularDuotone.displayName = 'BriefcaseRegularDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseRegularDuotone, BriefcaseRegularDuotone as BriefcaseRegularDuotoneIcon, BriefcaseRegularDuotone as SiBriefcaseRegularDuotone };
export default BriefcaseRegularDuotone;
export type { BriefcaseRegularDuotoneProps };
