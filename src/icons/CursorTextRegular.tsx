import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextRegular = memo(
  forwardRef<SVGSVGElement, CursorTextRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text" {...props}>
      <path d="M9 2.75c1.23 0 2.32.59 3 1.5a3.7 3.7 0 0 1 3-1.5h1a.75.75 0 0 1 0 1.5h-1c-1.24 0-2.25 1-2.25 2.25v11c0 1.24 1 2.25 2.25 2.25h1a.75.75 0 0 1 0 1.5h-1a3.7 3.7 0 0 1-3-1.5 3.7 3.7 0 0 1-3 1.5H8a.75.75 0 0 1 0-1.5h1c1.24 0 2.25-1 2.25-2.25v-11c0-1.24-1-2.25-2.25-2.25H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CursorTextRegular.displayName = 'CursorTextRegular';

// Triple export pattern (lucide-react style)
export { CursorTextRegular, CursorTextRegular as CursorTextRegularIcon, CursorTextRegular as SiCursorTextRegular };
export default CursorTextRegular;
export type { CursorTextRegularProps };
