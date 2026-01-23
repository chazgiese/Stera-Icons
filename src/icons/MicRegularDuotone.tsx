import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-duotone" {...props}>
      <path fill="currentColor" d="M20 10.25c.41 0 .75.34.75.75a8.75 8.75 0 0 1-8 8.72v1.53H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.75 8.75 0 0 1-8-8.72.75.75 0 0 1 1.5 0 7.25 7.25 0 1 0 14.5 0c0-.41.34-.75.75-.75" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25A4.75 4.75 0 0 1 16.75 6v5a4.75 4.75 0 1 1-9.5 0V6A4.75 4.75 0 0 1 12 1.25m0 1.5A3.25 3.25 0 0 0 8.75 6v5a3.25 3.25 0 0 0 6.5 0V6c0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MicRegularDuotone.displayName = 'MicRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicRegularDuotone, MicRegularDuotone as MicRegularDuotoneIcon, MicRegularDuotone as SiMicRegularDuotone };
export default MicRegularDuotone;
export type { MicRegularDuotoneProps };
