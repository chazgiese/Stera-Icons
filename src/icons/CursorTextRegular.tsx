import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorTextRegularProps = Omit<IconBaseProps, 'children'>;

const CursorTextRegular = memo(
  forwardRef<SVGSVGElement, CursorTextRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text" {...props}>
      <path fill="currentColor" d="M8 1.25c1.68 0 3.16.87 4 2.19a4.8 4.8 0 0 1 4-2.19h1a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 0 12.75 6v12c0 1.8 1.46 3.25 3.25 3.25h1a.75.75 0 0 1 0 1.5h-1a4.7 4.7 0 0 1-4-2.19 4.7 4.7 0 0 1-4 2.19H7a.75.75 0 0 1 0-1.5h1c1.8 0 3.25-1.46 3.25-3.25V6c0-1.8-1.46-3.25-3.25-3.25H7a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

CursorTextRegular.displayName = 'CursorTextRegular';

// Triple export pattern (lucide-react style)
export { CursorTextRegular, CursorTextRegular as CursorTextRegularIcon, CursorTextRegular as SiCursorTextRegular };
export type { CursorTextRegularProps };
