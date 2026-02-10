import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextFill = memo(
  forwardRef<SVGSVGElement, CursorTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-fill" {...props}>
      <path fill="currentColor" d="M9 2c1.15 0 2.2.43 3 1.15A4.5 4.5 0 0 1 15 2h1a1.5 1.5 0 0 1 0 3h-1c-.83 0-1.5.67-1.5 1.5v11c0 .83.67 1.5 1.5 1.5h1a1.5 1.5 0 0 1 0 3h-1c-1.15 0-2.2-.43-3-1.15A4.5 4.5 0 0 1 9 22H8a1.5 1.5 0 0 1 0-3h1c.83 0 1.5-.67 1.5-1.5v-11C10.5 5.67 9.83 5 9 5H8a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

CursorTextFill.displayName = 'CursorTextFill';

// Triple export pattern (lucide-react style)
export { CursorTextFill, CursorTextFill as CursorTextFillIcon, CursorTextFill as SiCursorTextFill };
export default CursorTextFill;
export type { CursorTextFillProps };
