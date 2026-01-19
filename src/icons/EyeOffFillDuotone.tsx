import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-off-fill-duotone" {...props}>
      <path d="M17.28 18.69A11 11 0 0 1 12 20c-4.92 0-9.1-3.17-10.93-7.62a1 1 0 0 1 0-.76A12.6 12.6 0 0 1 5 6.42zM12 4c4.92 0 9.1 3.17 10.93 7.62a1 1 0 0 1 0 .76 12.6 12.6 0 0 1-3.93 5.2L6.72 5.31A11 11 0 0 1 12 4" opacity={0.4} />
        <path fill="currentColor" d="M3.3 3.3a1 1 0 0 1 1.4 0l16 16a1 1 0 0 1-1.4 1.4l-16-16a1 1 0 0 1 0-1.4" />
    </IconBase>
  ))
);

EyeOffFillDuotone.displayName = 'EyeOffFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeOffFillDuotone, EyeOffFillDuotone as EyeOffFillDuotoneIcon, EyeOffFillDuotone as SiEyeOffFillDuotone };
export default EyeOffFillDuotone;
export type { EyeOffFillDuotoneProps };
