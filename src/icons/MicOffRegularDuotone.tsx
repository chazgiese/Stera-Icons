import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-duotone" {...props}>
      <path d="M4 10.25c.41 0 .75.34.75.75a7.25 7.25 0 0 0 11.24 6.05l1.08 1.08a8.7 8.7 0 0 1-4.32 1.59v1.53H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.75 8.75 0 0 1-8-8.72c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M8.75 9.81V11a3.25 3.25 0 0 0 4.27 3.08l1.14 1.15A4.73 4.73 0 0 1 7.25 11V8.31zM20 10.25c.41 0 .75.34.75.75 0 1.5-.38 2.92-1.05 4.15a.75.75 0 1 1-1.32-.71c.56-1.02.87-2.2.87-3.44 0-.41.34-.75.75-.75M12 1.25A4.75 4.75 0 0 1 16.75 6v5.05a.75.75 0 0 1-1.5 0V6a3.25 3.25 0 0 0-5.94-1.83.75.75 0 0 1-1.23-.85A4.8 4.8 0 0 1 12 1.25" opacity={0.4} />
        <path fill="currentColor" d="M1.47 1.47c.3-.3.77-.3 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

MicOffRegularDuotone.displayName = 'MicOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicOffRegularDuotone, MicOffRegularDuotone as MicOffRegularDuotoneIcon, MicOffRegularDuotone as SiMicOffRegularDuotone };
export default MicOffRegularDuotone;
export type { MicOffRegularDuotoneProps };
