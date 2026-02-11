import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftBoldProps = Omit<IconBaseProps, 'children'>;

const RotateLeftBold = memo(
  forwardRef<SVGSVGElement, RotateLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-bold" {...props}>
      <path d="M9.8 1.8a1 1 0 1 1 1.4 1.4L9.42 5H12a8.5 8.5 0 1 1-8.5 8.5 1 1 0 1 1 2 0A6.5 6.5 0 1 0 12 7H9.41l1.8 1.8a1 1 0 0 1-1.42 1.4L6.3 6.7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftBold.displayName = 'RotateLeftBold';

// Triple export pattern (lucide-react style)
export { RotateLeftBold, RotateLeftBold as RotateLeftBoldIcon, RotateLeftBold as SiRotateLeftBold };
export default RotateLeftBold;
export type { RotateLeftBoldProps };
