import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorClickRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorClickRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-click-duotone" {...props}>
      <path d="M5.12 12.8a.75.75 0 0 1 1.06 1.05l-1.36 1.36a.75.75 0 0 1-1.06-1.06zM2.28 7.56c.1-.4.51-.64.91-.53l1.86.5a.75.75 0 0 1-.39 1.44l-1.85-.5a.75.75 0 0 1-.53-.91M14.15 3.76a.75.75 0 0 1 1.06 1.06l-1.35 1.36a.75.75 0 0 1-1.07-1.06zM7.56 2.28c.4-.11.8.13.91.53l.5 1.85a.75.75 0 0 1-1.45.39l-.5-1.86c-.1-.4.14-.8.54-.91" opacity={0.4} />
        <path fillRule="evenodd" d="M8.81 10.69a1.48 1.48 0 0 1 1.77-1.9l.1.02 10.06 3.35a1.48 1.48 0 0 1-.05 2.83l-4.4 1.3-1.3 4.4a1.48 1.48 0 0 1-2.83.05zm4.76 9.52 1.4-4.74.02-.09q.16-.3.48-.42l4.74-1.4-9.96-3.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorClickRegularDuotone.displayName = 'CursorClickRegularDuotone';

// Triple export pattern (lucide-react style)
export { CursorClickRegularDuotone, CursorClickRegularDuotone as CursorClickRegularDuotoneIcon, CursorClickRegularDuotone as SiCursorClickRegularDuotone };
export default CursorClickRegularDuotone;
export type { CursorClickRegularDuotoneProps };
