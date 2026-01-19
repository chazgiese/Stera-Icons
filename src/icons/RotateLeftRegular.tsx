import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftRegularProps = Omit<IconBaseProps, 'children'>;

const RotateLeftRegular = memo(
  forwardRef<SVGSVGElement, RotateLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left" {...props}>
      <path fill="currentColor" d="M10.47.47a.75.75 0 1 1 1.06 1.06L8.81 4.25H12A8.75 8.75 0 1 1 3.25 13a.75.75 0 0 1 1.5 0A7.25 7.25 0 1 0 12 5.75H8.81l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotateLeftRegular.displayName = 'RotateLeftRegular';

// Triple export pattern (lucide-react style)
export { RotateLeftRegular, RotateLeftRegular as RotateLeftRegularIcon, RotateLeftRegular as SiRotateLeftRegular };
export default RotateLeftRegular;
export type { RotateLeftRegularProps };
