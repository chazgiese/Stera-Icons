import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotateLeftBold = memo(
  forwardRef<SVGSVGElement, RotateLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-bold" {...props}>
      <path fill="currentColor" d="M10.3.3a1 1 0 1 1 1.4 1.4L9.42 4H12a9 9 0 1 1-9 9 1 1 0 1 1 2 0 7 7 0 1 0 7-7H9.41l2.3 2.3a1 1 0 1 1-1.42 1.4l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftBold.displayName = 'RotateLeftBold';

// Triple export pattern (lucide-react style)
export { RotateLeftBold, RotateLeftBold as RotateLeftBoldIcon, RotateLeftBold as SiRotateLeftBold };
export default RotateLeftBold;
export type { RotateLeftBoldProps };
