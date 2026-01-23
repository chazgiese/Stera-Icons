import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFill = memo(
  forwardRef<SVGSVGElement, CursorPointerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-fill" {...props}>
      <path fill="currentColor" d="M9.78 1c1.05 0 1.9.83 1.9 1.86v7.64a.43.43 0 0 0 .87 0V8.57c0-1.02.85-1.86 1.9-1.86s1.89.84 1.89 1.86v2.36c0 .23.2.43.44.43s.43-.2.43-.43V9.7c0-1.02.85-1.85 1.9-1.85S21 8.69 21 9.7v4.58A8.8 8.8 0 0 1 12.11 23a8.84 8.84 0 0 1-8.78-7.36L1.9 12.08l-.03-.06-.08-.17c-.4-.86-.07-1.88.78-2.37a1.9 1.9 0 0 1 2.58.68l1.93 3.2c.1.17.3.25.49.2a.4.4 0 0 0 .32-.42V2.86c0-1.03.85-1.86 1.9-1.86" />
    </IconBase>
  ))
);

CursorPointerFill.displayName = 'CursorPointerFill';

// Triple export pattern (lucide-react style)
export { CursorPointerFill, CursorPointerFill as CursorPointerFillIcon, CursorPointerFill as SiCursorPointerFill };
export default CursorPointerFill;
export type { CursorPointerFillProps };
