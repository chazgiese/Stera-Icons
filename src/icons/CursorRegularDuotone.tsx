import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-duotone" {...props}>
      <path fill="currentColor" d="M4.87 4.12q-.16.15-.1.4l5.24 15.71a.4.4 0 0 0 .74 0l1.4-6.56q.16-.8.74-1.37l.08-.08 1.06 1.06-.08.08q-.26.26-.34.63l-1.4 6.6-.01.05a1.9 1.9 0 0 1-3.61.06L3.35 5a1.9 1.9 0 0 1 .46-1.94z" opacity={.4} />
        <path fill="currentColor" d="M3.8 3.06c.48-.47 1.2-.7 1.94-.46l15.72 5.24a1.9 1.9 0 0 1-.07 3.6c-1.36.41-2.45.6-3.48.76-1.04.16-2.02.31-3.22.64q-.3.07-.52.3l-.14.14-1.06-1.06.14-.14q.49-.5 1.19-.7c1.3-.34 2.34-.5 3.37-.66 1.02-.16 2.03-.34 3.3-.71a.4.4 0 0 0 .01-.75L5.27 4.02a.4.4 0 0 0-.4.1z" />
    </IconBase>
  ))
);

CursorRegularDuotone.displayName = 'CursorRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorRegularDuotone, CursorRegularDuotone as CursorRegularDuotoneIcon, CursorRegularDuotone as SiCursorRegularDuotone };
export default CursorRegularDuotone;
export type { CursorRegularDuotoneProps };
