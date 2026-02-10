import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AtomFillProps = Omit<IconBaseProps, 'children'>;

const AtomFill = memo(
  forwardRef<SVGSVGElement, AtomFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="atom-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M15.87 3.2c1.44-.37 2.97-.3 4.1.83s1.2 2.66.83 4.1A13 13 0 0 1 18.88 12h.01v.02a13 13 0 0 1 1.9 3.86c.38 1.44.3 2.97-.82 4.1-1.13 1.12-2.66 1.2-4.1.83A13 13 0 0 1 12 18.88l-.01.01h-.01a13 13 0 0 1-3.86 1.9c-1.44.38-2.97.3-4.1-.82-1.12-1.13-1.2-2.66-.83-4.1A13 13 0 0 1 5.12 12L5.1 12v-.01a13 13 0 0 1-1.9-3.86c-.39-1.44-.3-2.97.82-4.1 1.13-1.12 2.66-1.2 4.1-.82 1.25.32 2.57 1.02 3.86 1.9H12a13 13 0 0 1 3.87-1.9M6.4 13.69a10 10 0 0 0-1.27 2.7c-.29 1.08-.11 1.75.3 2.17.43.42 1.1.6 2.19.31q1.05-.28 2.32-1.04l.37-.23-1-.86-.11-.11-.37-.35-.1-.1-.91-.9-.12-.13-.35-.37-.1-.1-.82-.95zm11.18 0a30 30 0 0 1-2.32 2.5l-.1.09q-.73.69-1.49 1.32 1.49.94 2.7 1.27c1.08.29 1.75.11 2.17-.3.42-.43.6-1.1.31-2.19a10 10 0 0 0-1.27-2.69M12 10.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M7.63 5.14c-1.09-.29-1.76-.11-2.18.31s-.6 1.1-.31 2.18c.2.8.65 1.71 1.27 2.69l.05-.06.72-.84.09-.1.16-.17.19-.2.09-.1.12-.12.07-.08.8-.8.19-.17.44-.41.1-.09q.38-.35.78-.68l.08-.07.03-.02a10 10 0 0 0-2.7-1.27m10.92.31c-.42-.42-1.1-.6-2.18-.31q-1.21.32-2.69 1.27a29 29 0 0 1 2.5 2.32l.11.12.35.38.07.08.26.29q.32.35.62.72a10 10 0 0 0 1.27-2.7c.29-1.08.11-1.75-.3-2.17" clipRule="evenodd" />
    </IconBase>
  ))
);

AtomFill.displayName = 'AtomFill';

// Triple export pattern (lucide-react style)
export { AtomFill, AtomFill as AtomFillIcon, AtomFill as SiAtomFill };
export default AtomFill;
export type { AtomFillProps };
