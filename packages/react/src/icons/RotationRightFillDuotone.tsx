import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotationRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotationRightFillDuotone = memo(
  forwardRef<SVGSVGElement, RotationRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.95 5.64a1 1 0 0 1 1.41 0A9 9 0 0 1 13 20.94v-2.01a7 7 0 0 0 3.95-11.88 1 1 0 0 1 0-1.41M11 5.07a7 7 0 0 0-3.95 11.88 1 1 0 0 1-1.41 1.41A9 9 0 0 1 11 3.06z" opacity={0.4} />
        <path fill="currentColor" d="M12.38 16.08a1 1 0 0 0-1.09.21l-3 3a1 1 0 0 0 0 1.42l3 3A1 1 0 0 0 13 23v-6a1 1 0 0 0-.62-.92M12.7.3A1 1 0 0 0 11 1v6a1 1 0 0 0 1.7.7l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightFillDuotone.displayName = 'RotationRightFillDuotone';

// Triple export pattern (lucide-react style)
export { RotationRightFillDuotone, RotationRightFillDuotone as RotationRightFillDuotoneIcon, RotationRightFillDuotone as SiRotationRightFillDuotone };
export type { RotationRightFillDuotoneProps };
