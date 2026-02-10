import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.1 5.66A2.02 2.02 0 0 1 5.67 3.1l13.96 4.65a2.02 2.02 0 0 1-.07 3.85l-6.14 1.8-1.8 6.14a2.02 2.02 0 0 1-3.85.07zM5 5v.01L9.66 19l.01.01h.02v-.01l1.96-6.66.04-.12a1 1 0 0 1 .64-.56l6.66-1.96.01-.02-.01-.01L5.02 5z" clipRule="evenodd" />
        <path fill="currentColor" d="M5.02 5 19 9.66l.01.01v.01h-.01l-6.66 1.97a1 1 0 0 0-.64.56l-.04.12-1.96 6.66-.02.01-.01-.01L5 5.02V5z" opacity={.4} />
    </IconBase>
  ))
);

CursorFillDuotone.displayName = 'CursorFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorFillDuotone, CursorFillDuotone as CursorFillDuotoneIcon, CursorFillDuotone as SiCursorFillDuotone };
export default CursorFillDuotone;
export type { CursorFillDuotoneProps };
