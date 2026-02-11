import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftRegularProps = Omit<IconBaseProps, 'children'>;

const RotateLeftRegular = memo(
  forwardRef<SVGSVGElement, RotateLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left" {...props}>
      <path d="M9.97 1.97a.75.75 0 1 1 1.06 1.06L8.81 5.25H12a8.25 8.25 0 1 1-8.25 8.25.75.75 0 0 1 1.5 0A6.75 6.75 0 1 0 12 6.75H8.81l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotateLeftRegular.displayName = 'RotateLeftRegular';

// Triple export pattern (lucide-react style)
export { RotateLeftRegular, RotateLeftRegular as RotateLeftRegularIcon, RotateLeftRegular as SiRotateLeftRegular };
export default RotateLeftRegular;
export type { RotateLeftRegularProps };
