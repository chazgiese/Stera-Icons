import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-duotone" {...props}>
      <path fill="currentColor" d="M9.03 4.5 19.54 8a1.77 1.77 0 0 1-.06 3.37l-6.27 1.84-1.84 6.27a1.77 1.77 0 0 1-3.37.06L4.5 9.03a.75.75 0 0 0 1.42-.47l3.5 10.5c.08.26.44.25.5 0l1.97-6.66.03-.1q.14-.31.48-.41l6.66-1.96a.27.27 0 0 0 0-.5L8.57 5.91a.75.75 0 0 0 .47-1.43" opacity={.4} />
        <path fill="currentColor" d="M3.34 5.58a1.77 1.77 0 0 1 2.24-2.24L9.03 4.5a.75.75 0 0 1-.47 1.43L5.1 4.77a.27.27 0 0 0-.33.33l1.15 3.46a.75.75 0 0 1-1.43.47z" />
    </IconBase>
  ))
);

CursorRegularDuotone.displayName = 'CursorRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorRegularDuotone, CursorRegularDuotone as CursorRegularDuotoneIcon, CursorRegularDuotone as SiCursorRegularDuotone };
export default CursorRegularDuotone;
export type { CursorRegularDuotoneProps };
