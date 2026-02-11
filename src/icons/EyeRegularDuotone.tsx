import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeRegularDuotone = memo(
  forwardRef<SVGSVGElement, EyeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4.25c4.81 0 8.9 3.1 10.7 7.47q.1.28 0 .56c-1.8 4.37-5.89 7.47-10.7 7.47s-8.9-3.1-10.7-7.47a.8.8 0 0 1 0-.56C3.1 7.35 7.2 4.25 12 4.25m0 1.5c-4.03 0-7.55 2.53-9.18 6.25 1.63 3.72 5.15 6.25 9.18 6.25s7.55-2.53 9.18-6.25C19.55 8.28 16.03 5.75 12 5.75" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EyeRegularDuotone.displayName = 'EyeRegularDuotone';

// Triple export pattern (lucide-react style)
export { EyeRegularDuotone, EyeRegularDuotone as EyeRegularDuotoneIcon, EyeRegularDuotone as SiEyeRegularDuotone };
export default EyeRegularDuotone;
export type { EyeRegularDuotoneProps };
