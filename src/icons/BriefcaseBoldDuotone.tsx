import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type BriefcaseBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BriefcaseBoldDuotone = memo(
  forwardRef<SVGSVGElement, BriefcaseBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="briefcase-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.2 5.5q1.23-.01 2.05.04a4 4 0 0 1 1.57.4 4 4 0 0 1 1.74 1.74c.25.49.35 1 .4 1.57q.05.82.04 2.05v3.9q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H6.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57L1 16.33V11.3q-.01-1.23.04-2.05a4 4 0 0 1 .4-1.57 4 4 0 0 1 1.74-1.74c.49-.25 1-.35 1.57-.4q.82-.05 2.05-.04zm-10.4 2c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18a2 2 0 0 0-.87.87c-.08.16-.15.38-.18.82A26 26 0 0 0 3 11.3v5l.04.79c.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h10.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.9c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82a2 2 0 0 0-.87-.87 2 2 0 0 0-.82-.18c-.45-.04-1.03-.04-1.89-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M21 11.3v1.05c-.6.18-1.39.4-2.26.62-1.27.32-2.77.64-4.24.84v.7899999999999999a1 1 0 0 1-1 .9h-3a1 1 0 0 1-1-1v-.69c-1.47-.2-2.97-.52-4.23-.84q-1.34-.34-2.27-.62v-2.08l.29.08c.62.19 1.48.44 2.46.68 1.99.5 4.39.97 6.25.97s4.26-.47 6.25-.97c.98-.25 1.85-.5 2.46-.68l.29-.08zM14.27 2q.44 0 .8.02.27.01.58.1l.2.08.15.08q.5.27.81.76.22.37.3.75.07.34.13.79l.13.92h-2.02l-.1-.64-.13-.75-.1-.08-.1-.02-.65-.01H9.74l-.76.03-.1.08-.03.11-.1.64-.1.64H6.63l.14-.92q.06-.45.13-.8.06-.36.3-.74l.08-.14q.35-.46.87-.7l.2-.08q.3-.09.59-.1.35-.02.8-.02z" />
    </IconBase>
  ))
);

BriefcaseBoldDuotone.displayName = 'BriefcaseBoldDuotone';

// Triple export pattern (lucide-react style)
export { BriefcaseBoldDuotone, BriefcaseBoldDuotone as BriefcaseBoldDuotoneIcon, BriefcaseBoldDuotone as SiBriefcaseBoldDuotone };
export type { BriefcaseBoldDuotoneProps };
