import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BriefcaseBoldProps = Omit<IconBaseProps, 'children'>;

const BriefcaseBold = memo(
  forwardRef<SVGSVGElement, BriefcaseBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M14.27 2q.44 0 .8.02.27.01.58.1l.2.08.15.08q.49.27.81.76.22.37.3.75.06.34.13.79l.13.92q1.12-.01 1.88.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57a23 23 0 0 1 .04 1.77v4.18q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57L1 16.33v-5.37q-.01-1 .04-1.71a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.76-.05 1.88-.04l.13-.92q.06-.45.13-.8t.3-.74l.1-.14q.33-.46.86-.7l.2-.08q.3-.09.59-.1.35-.02.8-.02zM21 12.35c-.6.18-1.39.4-2.26.62-1.27.32-2.77.64-4.24.84v.79a1 1 0 0 1-1 .9h-3a1 1 0 0 1-1-1v-.69c-1.47-.2-2.97-.52-4.24-.84-.87-.22-1.65-.44-2.26-.62v3.95l.04.79c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89zM6.8 7.5c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82l-.04.86.29.08c.61.19 1.48.43 2.46.68 1.99.5 4.39.97 6.25.97s4.26-.47 6.25-.97c.98-.25 1.85-.5 2.46-.68l.29-.08q0-.5-.04-.86c-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18c-.45-.04-1.03-.04-1.89-.04zM9.73 4l-.76.03-.1.08q.02-.04-.02.11l-.1.64-.1.64h6.7l-.1-.64-.13-.75-.1-.08-.1-.02-.65-.01z" clipRule="evenodd" />
    </IconBase>
  ))
);

BriefcaseBold.displayName = 'BriefcaseBold';

// Triple export pattern (lucide-react style)
export { BriefcaseBold, BriefcaseBold as BriefcaseBoldIcon, BriefcaseBold as SiBriefcaseBold };
export default BriefcaseBold;
export type { BriefcaseBoldProps };
