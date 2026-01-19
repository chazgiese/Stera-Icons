import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 4c4.92 0 9.1 3.17 10.93 7.62a1 1 0 0 1 0 .76C21.1 16.83 16.93 20 12 20s-9.1-3.17-10.93-7.62a1 1 0 0 1 0-.76C2.9 7.17 7.07 4 12 4m0 4.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

EyeFillDuotone.displayName = 'EyeFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeFillDuotone, EyeFillDuotone as EyeFillDuotoneIcon, EyeFillDuotone as SiEyeFillDuotone };
export default EyeFillDuotone;
export type { EyeFillDuotoneProps };
