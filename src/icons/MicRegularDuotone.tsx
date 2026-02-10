import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-duotone" {...props}>
      <path fill="currentColor" d="M19.02 11.81a.75.75 0 0 1 1.45.38 8.8 8.8 0 0 1-7.72 6.53v1.53H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.8 8.8 0 0 1-7.72-6.53.75.75 0 0 1 1.45-.38 7.25 7.25 0 0 0 14.04 0" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25A4.75 4.75 0 0 1 16.75 7v3a4.75 4.75 0 1 1-9.5 0V7A4.75 4.75 0 0 1 12 2.25m0 1.5A3.25 3.25 0 0 0 8.75 7v3a3.25 3.25 0 0 0 6.5 0V7c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicRegularDuotone.displayName = 'MicRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicRegularDuotone, MicRegularDuotone as MicRegularDuotoneIcon, MicRegularDuotone as SiMicRegularDuotone };
export default MicRegularDuotone;
export type { MicRegularDuotoneProps };
