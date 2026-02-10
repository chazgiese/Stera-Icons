import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotationLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotation-left-duotone" {...props}>
      <path d="M6.02 7.08a.75.75 0 0 1 1.15.95A6.25 6.25 0 0 0 12 18.25h1.19l.75.75-.75.75h-1.47a7.75 7.75 0 0 1-5.7-12.67M12.27 4.25a7.75 7.75 0 0 1 5.7 12.69.75.75 0 0 1-1.15-.96 6.25 6.25 0 0 0-4.6-10.23h-1.41L10.06 5l.75-.75h1.46" opacity={0.4} />
        <path fill="currentColor" d="M11.47 15.47c.3-.3.77-.3 1.06 0l3 3c.3.3.3.77 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06L13.94 19l-2.47-2.47a.75.75 0 0 1 0-1.06M11.47 1.47a.75.75 0 1 1 1.06 1.06L10.06 5l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06z" />
    </IconBase>
  ))
);

RotationLeftRegularDuotone.displayName = 'RotationLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { RotationLeftRegularDuotone, RotationLeftRegularDuotone as RotationLeftRegularDuotoneIcon, RotationLeftRegularDuotone as SiRotationLeftRegularDuotone };
export default RotationLeftRegularDuotone;
export type { RotationLeftRegularDuotoneProps };
