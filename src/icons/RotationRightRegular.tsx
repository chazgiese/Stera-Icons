import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightRegularProps = Omit<IconBaseProps, 'children'>;

const RotationRightRegular = memo(
  forwardRef<SVGSVGElement, RotationRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-right" {...props}>
      <path fill="currentColor" d="M17.99 7.08a.75.75 0 0 0-1.16.95A6.25 6.25 0 0 1 12 18.25h-1.19l1.72-1.72a.75.75 0 1 0-1.06-1.06l-3 3c-.3.3-.3.77 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72h1.47a7.75 7.75 0 0 0 5.7-12.67M12.53 1.47a.75.75 0 0 0-1.06 1.06l1.72 1.72h-1.46a7.75 7.75 0 0 0-5.7 12.69.75.75 0 0 0 1.16-.96 6.25 6.25 0 0 1 4.59-10.23h1.41l-1.72 1.72a.75.75 0 0 0 1.06 1.06l3-3c.3-.3.3-.77 0-1.06z" />
    </IconBase>
  ))
);

RotationRightRegular.displayName = 'RotationRightRegular';

// Triple export pattern (lucide-react style)
export { RotationRightRegular, RotationRightRegular as RotationRightRegularIcon, RotationRightRegular as SiRotationRightRegular };
export default RotationRightRegular;
export type { RotationRightRegularProps };
