import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseRegularProps = Omit<IconBaseProps, 'children'>;

const BriefcaseRegular = memo(
  forwardRef<SVGSVGElement, BriefcaseRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M13.78 3q.45 0 .78.02.34 0 .7.16a2 2 0 0 1 .84.73q.2.32.27.66.07.32.13.76l.14.92q.93-.01 1.6.04c.54.05 1.02.14 1.46.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.04.52.04 1.22v3.21q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-3.21q0-.7.04-1.22c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.65-.04 1.59-.04l.14-.92q.06-.44.13-.76.07-.34.27-.66a2 2 0 0 1 .85-.73q.35-.15.7-.16.32-.03.77-.02zm6.47 9.05q-.87.3-2.2.67a33 33 0 0 1-3.8.84v.94c0 .41-.34.75-.75.75h-3a.75.75 0 0 1-.75-.75v-.94a33 33 0 0 1-3.8-.84q-1.33-.37-2.2-.67v2.15c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91zM7.8 7.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.34-.98.99c-.1.2-.17.46-.21.91q-.02.25-.03.58l.38.13c.55.19 1.33.43 2.22.68 1.79.5 3.96.97 5.64.97s3.85-.48 5.64-.97c.89-.25 1.67-.5 2.22-.68l.38-.13q0-.32-.03-.58a2 2 0 0 0-.2-.91 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04zm2.42-3.25-.85.04a.5.5 0 0 0-.22.19q0 0-.06.18l-.11.65-.1.69h6.25l-.11-.69-.17-.83a.5.5 0 0 0-.22-.19l-.19-.03-.66-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

BriefcaseRegular.displayName = 'BriefcaseRegular';

// Triple export pattern (lucide-react style)
export { BriefcaseRegular, BriefcaseRegular as BriefcaseRegularIcon, BriefcaseRegular as SiBriefcaseRegular };
export default BriefcaseRegular;
export type { BriefcaseRegularProps };
