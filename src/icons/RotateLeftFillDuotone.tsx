import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RotateLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-left-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 4a9 9 0 1 1-9 9 1 1 0 1 1 2 0 7 7 0 1 0 7-7z" opacity={.4} />
        <path fill="currentColor" d="M10.3.3A1 1 0 0 1 12 1v8a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

RotateLeftFillDuotone.displayName = 'RotateLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { RotateLeftFillDuotone, RotateLeftFillDuotone as RotateLeftFillDuotoneIcon, RotateLeftFillDuotone as SiRotateLeftFillDuotone };
export default RotateLeftFillDuotone;
export type { RotateLeftFillDuotoneProps };
