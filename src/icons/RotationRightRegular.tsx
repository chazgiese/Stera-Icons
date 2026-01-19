import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegular = memo(
  forwardRef<SVGSVGElement, RotationRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right" {...props}>
      <path fill="currentColor" d="M18.19 5.81a.75.75 0 0 0-1.06 1.06 7.25 7.25 0 0 1-4.86 12.38H10.8l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72h1.51A8.75 8.75 0 0 0 18.2 5.8M12.53.47a.75.75 0 0 0-1.06 1.06l1.72 1.72h-1.51A8.75 8.75 0 0 0 5.8 18.2a.75.75 0 0 0 1.06-1.06 7.25 7.25 0 0 1 4.86-12.37l.27-.01h1.19l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotationRightRegular.displayName = 'RotationRightRegular';

// Triple export pattern (lucide-react style)
export { RotationRightRegular, RotationRightRegular as RotationRightRegularIcon, RotationRightRegular as SiRotationRightRegular };
export default RotationRightRegular;
export type { RotationRightRegularProps };
