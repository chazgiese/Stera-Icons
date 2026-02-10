import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerFillProps = Omit<IconBaseProps, 'children'>;

const CursorPointerFill = memo(
  forwardRef<SVGSVGElement, CursorPointerFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-pointer-fill" {...props}>
      <path fill="currentColor" d="M9.86 2.5c.8 0 1.46.65 1.46 1.45V11a.56.56 0 0 0 1.12 0V9a1.45 1.45 0 0 1 2.9 0v2.5a.56.56 0 0 0 1.12 0V10a1.45 1.45 0 0 1 2.9 0V14A7.49 7.49 0 0 1 4.5 15.25l-.03-.11L3.23 12l-.04-.07-.06-.13a1.45 1.45 0 0 1 2.58-1.32l1.66 2.81a.56.56 0 0 0 1.04-.28V3.95c0-.8.65-1.45 1.45-1.45" />
    </IconBase>
  ))
);

CursorPointerFill.displayName = 'CursorPointerFill';

// Triple export pattern (lucide-react style)
export { CursorPointerFill, CursorPointerFill as CursorPointerFillIcon, CursorPointerFill as SiCursorPointerFill };
export default CursorPointerFill;
export type { CursorPointerFillProps };
