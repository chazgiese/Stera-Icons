import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFill = memo(
  forwardRef<SVGSVGElement, RotateLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-fill" {...props}>
      <path fill="currentColor" d="M10.47.47a.75.75 0 0 1 1.28.53v3H12a9 9 0 1 1-9 9 1 1 0 0 1 2 0 7 7 0 1 0 7-7h-.25v3a.75.75 0 0 1-1.28.53l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotateLeftFill.displayName = 'RotateLeftFill';

// Triple export pattern (lucide-react style)
export { RotateLeftFill, RotateLeftFill as RotateLeftFillIcon, RotateLeftFill as SiRotateLeftFill };
export type { RotateLeftFillProps };
