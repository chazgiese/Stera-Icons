import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftRegularProps = Omit<IconBaseProps, 'children'>;

const RotationLeftRegular = memo(
  forwardRef<SVGSVGElement, RotationLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left" {...props}>
      <path d="M6.02 7.08a.75.75 0 0 1 1.15.95A6.25 6.25 0 0 0 12 18.25h1.19l-1.72-1.72a.75.75 0 0 1 1.06-1.06l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 0 1-1.06-1.06l1.72-1.72h-1.47a7.75 7.75 0 0 1-5.7-12.67M11.47 1.47a.75.75 0 0 1 1.06 1.06l-1.72 1.72h1.46a7.75 7.75 0 0 1 5.7 12.69.75.75 0 0 1-1.15-.96 6.25 6.25 0 0 0-4.6-10.23h-1.41l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotationLeftRegular.displayName = 'RotationLeftRegular';

// Triple export pattern (lucide-react style)
export { RotationLeftRegular, RotationLeftRegular as RotationLeftRegularIcon, RotationLeftRegular as SiRotationLeftRegular };
export default RotationLeftRegular;
export type { RotationLeftRegularProps };
