import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BriefcaseRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseRegularDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 5.75q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.9q.01 1.24-.04 2.03a4 4 0 0 1-.37 1.47c-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H6.8q-1.24.01-2.03-.04a4 4 0 0 1-1.47-.37 3.8 3.8 0 0 1-1.64-1.64 4 4 0 0 1-.37-1.47q-.05-.8-.04-2.03v-3.9q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zM6.8 7.25c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v3.9c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.34.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h10.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.9c0-.85 0-1.45-.04-1.9a2 2 0 0 0-.2-.92 2.3 2.3 0 0 0-.99-.98 2 2 0 0 0-.91-.21c-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M21.25 11.3v.72l-.04.01c-.63.2-1.52.44-2.54.7-1.33.33-2.9.67-4.42.86v.99a.75.75 0 0 1-.75.67h-3a.75.75 0 0 1-.75-.75v-.9c-1.52-.2-3.1-.54-4.42-.87-1.02-.26-1.9-.5-2.54-.7l-.04-.01v-1.5699999999999998q.21.07.47.14c.62.19 1.48.44 2.47.68 1.99.5 4.42.98 6.31.98 1.9 0 4.32-.48 6.31-.98.99-.24 1.85-.5 2.47-.68l.47-.14zM14.27 2.25q.45 0 .78.02.34 0 .7.16a2 2 0 0 1 .85.74q.2.34.26.67.07.33.13.77l.16 1.14h-1.51l-.14-.93-.16-.84a.5.5 0 0 0-.22-.19l-.19-.03-.66-.01H9.73l-.85.04a.5.5 0 0 0-.22.19q0 0-.06.19l-.1.65-.14.93H6.85l.16-1.14q.06-.44.13-.77.06-.34.26-.67a2 2 0 0 1 .85-.74q.37-.15.7-.16.34-.02.78-.02z" />
    </IconBase>
  ))
);

BriefcaseRegularDuotone.displayName = 'BriefcaseRegularDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseRegularDuotone, BriefcaseRegularDuotone as BriefcaseRegularDuotoneIcon, BriefcaseRegularDuotone as SiBriefcaseRegularDuotone };
export default BriefcaseRegularDuotone;
export type { BriefcaseRegularDuotoneProps };
