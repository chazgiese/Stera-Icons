import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type StoreBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const StoreBoldDuotone = memo(
  forwardRef<SVGSVGElement, StoreBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3 11.8q.9.59 2 .68v3.72c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.4.04.9.04 1.59.04v-2.6q0-.61.02-1.07t.25-.97a2.5 2.5 0 0 1 1.1-1.09q.49-.22.96-.25T11.9 14h.2q.61 0 1.07.02t.96.25q.73.37 1.1 1.1.22.49.25.96t.02 1.07V20c.7 0 1.2 0 1.59-.04.44-.03.66-.1.82-.18a2 2 0 0 0 .87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89v-3.72q1.1-.1 2-.68v4.4q.01 1.23-.04 2.05a4 4 0 0 1-.4 1.57 4 4 0 0 1-1.74 1.74c-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04a4 4 0 0 1-1.57-.4 4 4 0 0 1-1.74-1.74 4 4 0 0 1-.4-1.57Q3 17.43 3 16.2zm8.9 4.2a13 13 0 0 0-1.09.04l-.03.01a.5.5 0 0 0-.23.22v.04q-.02.06-.03.19c-.02.2-.02.46-.02.9V20h3v-2.6a13 13 0 0 0-.04-1.09l-.01-.03a.5.5 0 0 0-.22-.23h-.04q-.06-.03-.19-.03c-.2-.02-.46-.02-.9-.02z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M18.16 2.01a4 4 0 0 1 3.47 2.73L22.73 8c.2.62.25 1.42-.17 2.14a4.5 4.5 0 0 1-3.9 2.35 4.4 4.4 0 0 1-3.33-1.58A4.4 4.4 0 0 1 12 12.5a4.4 4.4 0 0 1-3.33-1.58 4.4 4.4 0 0 1-3.34 1.58 4.5 4.5 0 0 1-3.89-2.35A2.6 2.6 0 0 1 1.28 8l1.09-3.27A4 4 0 0 1 6.17 2h11.67zM6 4.01a2 2 0 0 0-1.73 1.36l-1.1 3.27c-.08.25-.04.42 0 .5.5.86 1.31 1.36 2.16 1.36 1 0 1.96-.7 2.4-1.86l.07-.14a1 1 0 0 1 1.8.14C10.04 9.8 11 10.5 12 10.5s1.96-.7 2.4-1.86l.07-.14a1 1 0 0 1 1.8.14c.44 1.16 1.4 1.86 2.4 1.86.85 0 1.66-.5 2.16-1.36.05-.08.08-.25 0-.5l-1.1-3.27A2 2 0 0 0 18 4L17.84 4H6" clipRule="evenodd" />
    </IconBase>
  ))
);

StoreBoldDuotone.displayName = 'StoreBoldDuotone';

// Triple export pattern (lucide-react style)
export { StoreBoldDuotone, StoreBoldDuotone as StoreBoldDuotoneIcon, StoreBoldDuotone as SiStoreBoldDuotone };
export type { StoreBoldDuotoneProps };
