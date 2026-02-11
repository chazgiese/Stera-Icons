import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillProps = Omit<IconBaseProps, 'children'>;

const CursorFill = memo(
  forwardRef<SVGSVGElement, CursorFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-fill" {...props}>
      <path d="M3.1 5.66A2.02 2.02 0 0 1 5.67 3.1l13.96 4.65a2.02 2.02 0 0 1-.07 3.85l-6.14 1.8-1.8 6.14a2.02 2.02 0 0 1-3.85.07z" />
    </IconBase>
  ))
);

CursorFill.displayName = 'CursorFill';

// Triple export pattern (lucide-react style)
export { CursorFill, CursorFill as CursorFillIcon, CursorFill as SiCursorFill };
export default CursorFill;
export type { CursorFillProps };
