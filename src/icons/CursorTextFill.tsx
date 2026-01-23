import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextFill = memo(
  forwardRef<SVGSVGElement, CursorTextFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-fill" {...props}>
      <path fill="currentColor" d="M8 1c1.58 0 3 .66 4 1.73A5.5 5.5 0 0 1 16 1h1a1.5 1.5 0 0 1 0 3h-1a2.5 2.5 0 0 0-2.5 2.5v11A2.5 2.5 0 0 0 16 20h1a1.5 1.5 0 0 1 0 3h-1c-1.58 0-3-.66-4-1.73A5.5 5.5 0 0 1 8 23H7a1.5 1.5 0 0 1 0-3h1a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 8 4H7a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

CursorTextFill.displayName = 'CursorTextFill';

// Triple export pattern (lucide-react style)
export { CursorTextFill, CursorTextFill as CursorTextFillIcon, CursorTextFill as SiCursorTextFill };
export default CursorTextFill;
export type { CursorTextFillProps };
