import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltFill = memo(
  forwardRef<SVGSVGElement, CursorTextAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-fill" {...props}>
      <path d="M9 2c1.15 0 2.2.43 3 1.15A4.5 4.5 0 0 1 15 2h1a1.5 1.5 0 0 1 0 3h-1c-.83 0-1.5.67-1.5 1.5v4h1a1.5 1.5 0 0 1 0 3h-1v4c0 .83.67 1.5 1.5 1.5h1a1.5 1.5 0 0 1 0 3h-1c-1.15 0-2.2-.43-3-1.15A4.5 4.5 0 0 1 9 22H8a1.5 1.5 0 0 1 0-3h1c.83 0 1.5-.67 1.5-1.5v-4h-1a1.5 1.5 0 0 1 0-3h1v-4C10.5 5.67 9.83 5 9 5H8a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

CursorTextAltFill.displayName = 'CursorTextAltFill';

// Triple export pattern (lucide-react style)
export { CursorTextAltFill, CursorTextAltFill as CursorTextAltFillIcon, CursorTextAltFill as SiCursorTextAltFill };
export default CursorTextAltFill;
export type { CursorTextAltFillProps };
