import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltRegular = memo(
  forwardRef<SVGSVGElement, CursorTextAltRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt" {...props}>
      <path fill="currentColor" d="M8 1.25c1.68 0 3.16.87 4 2.19a4.8 4.8 0 0 1 4-2.19h1a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 0 12.75 6v5.25H15a.75.75 0 0 1 0 1.5h-2.25V18c0 1.8 1.46 3.25 3.25 3.25h1a.75.75 0 0 1 0 1.5h-1a4.7 4.7 0 0 1-4-2.19 4.7 4.7 0 0 1-4 2.19H7a.75.75 0 0 1 0-1.5h1c1.8 0 3.25-1.46 3.25-3.25v-5.25H9a.75.75 0 0 1 0-1.5h2.25V6c0-1.8-1.46-3.25-3.25-3.25H7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CursorTextAltRegular.displayName = 'CursorTextAltRegular';

// Triple export pattern (lucide-react style)
export { CursorTextAltRegular, CursorTextAltRegular as CursorTextAltRegularIcon, CursorTextAltRegular as SiCursorTextAltRegular };
export default CursorTextAltRegular;
export type { CursorTextAltRegularProps };
