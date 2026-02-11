import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicOffRegularDuotone = memo(
  forwardRef<SVGSVGElement, MicOffRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off-duotone" {...props}>
      <path d="M4.07 11.27c.4-.1.8.14.9.54a7.25 7.25 0 0 0 10.4 4.61l1.1 1.1a9 9 0 0 1-3.72 1.2v1.53H15a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.8 8.8 0 0 1-7.72-6.53c-.1-.4.13-.81.54-.92M19.02 11.81a.75.75 0 0 1 1.45.38 9 9 0 0 1-1.18 2.65.75.75 0 0 1-1.25-.84q.67-1 .98-2.19" opacity={0.4} />
        <path d="M8.75 9.81V10a3.25 3.25 0 0 0 3.43 3.24l1.28 1.28A4.75 4.75 0 0 1 7.25 10V8.31zM12 2.25A4.75 4.75 0 0 1 16.75 7v3q0 .93-.33 1.75a.75.75 0 0 1-1.4-.55q.23-.56.23-1.2V7a3.25 3.25 0 0 0-5.84-1.97.75.75 0 1 1-1.19-.91A4.7 4.7 0 0 1 12 2.25" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-16-16a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

MicOffRegularDuotone.displayName = 'MicOffRegularDuotone';

// Triple export pattern (lucide-react style)
export { MicOffRegularDuotone, MicOffRegularDuotone as MicOffRegularDuotoneIcon, MicOffRegularDuotone as SiMicOffRegularDuotone };
export default MicOffRegularDuotone;
export type { MicOffRegularDuotoneProps };
