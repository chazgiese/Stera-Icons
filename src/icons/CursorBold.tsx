import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldProps = Omit<IconBaseProps, 'children'>;

const CursorBold = memo(
  forwardRef<SVGSVGElement, CursorBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.11 5.07a2.14 2.14 0 0 1 2.71-2.7L21.53 7.6c2 .66 1.94 3.5-.07 4.09l-6.97 2.05-2.05 6.97a2.14 2.14 0 0 1-4.1.08zm2-.81-.07.04-.04.06v.08l5.25 15.71q.02.08.05.08l.08.02.1-.02.04-.08 2.2-7.5.05-.12a1 1 0 0 1 .63-.55l7.5-2.2q.07-.03.07-.06l.03-.08-.02-.1q-.01-.01-.08-.04L5.2 4.26z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorBold.displayName = 'CursorBold';

// Triple export pattern (lucide-react style)
export { CursorBold, CursorBold as CursorBoldIcon, CursorBold as SiCursorBold };
export default CursorBold;
export type { CursorBoldProps };
