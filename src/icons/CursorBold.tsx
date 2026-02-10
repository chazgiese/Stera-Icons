import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldProps = Omit<IconBaseProps, 'children'>;

const CursorBold = memo(
  forwardRef<SVGSVGElement, CursorBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.1 5.66A2.02 2.02 0 0 1 5.67 3.1l13.96 4.65a2.02 2.02 0 0 1-.07 3.85l-6.14 1.8-1.8 6.14a2.02 2.02 0 0 1-3.85.07zM5 5v.01L9.66 19l.01.01h.02v-.01l1.96-6.66.04-.12a1 1 0 0 1 .64-.56l6.66-1.96.01-.02-.01-.01L5.02 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorBold.displayName = 'CursorBold';

// Triple export pattern (lucide-react style)
export { CursorBold, CursorBold as CursorBoldIcon, CursorBold as SiCursorBold };
export default CursorBold;
export type { CursorBoldProps };
