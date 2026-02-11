import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltRegular = memo(
  forwardRef<SVGSVGElement, CursorTextAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt" {...props}>
      <path d="M9 2.75c1.23 0 2.32.59 3 1.5a3.7 3.7 0 0 1 3-1.5h1a.75.75 0 0 1 0 1.5h-1c-1.24 0-2.25 1-2.25 2.25v4.75h1.75a.75.75 0 0 1 0 1.5h-1.75v4.75c0 1.24 1 2.25 2.25 2.25h1a.75.75 0 0 1 0 1.5h-1a3.7 3.7 0 0 1-3-1.5 3.7 3.7 0 0 1-3 1.5H8a.75.75 0 0 1 0-1.5h1c1.24 0 2.25-1 2.25-2.25v-4.75H9.5a.75.75 0 0 1 0-1.5h1.75V6.5c0-1.24-1-2.25-2.25-2.25H8a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CursorTextAltRegular.displayName = 'CursorTextAltRegular';

// Triple export pattern (lucide-react style)
export { CursorTextAltRegular, CursorTextAltRegular as CursorTextAltRegularIcon, CursorTextAltRegular as SiCursorTextAltRegular };
export default CursorTextAltRegular;
export type { CursorTextAltRegularProps };
