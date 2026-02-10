import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicOffRegularProps = Omit<IconBaseProps, 'children'>;

const MicOffRegular = memo(
  forwardRef<SVGSVGElement, MicOffRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="mic-off" {...props}>
      <path fill="currentColor" d="M3.47 3.47c.3-.3.77-.3 1.06 0l16 16a.75.75 0 1 1-1.06 1.06l-3-3a9 9 0 0 1-3.72 1.19v1.53H15a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-1.53a8.8 8.8 0 0 1-7.72-6.53.75.75 0 0 1 1.45-.38 7.25 7.25 0 0 0 10.38 4.61l-1.9-1.9A4.74 4.74 0 0 1 7.25 10V8.31L3.47 4.53a.75.75 0 0 1 0-1.06m15.55 8.34a.75.75 0 0 1 1.45.38 9 9 0 0 1-1.18 2.65.75.75 0 0 1-1.25-.84q.67-1 .98-2.19M15.25 10V7a3.25 3.25 0 0 0-5.84-1.97.75.75 0 1 1-1.19-.91A4.74 4.74 0 0 1 16.75 7v3q0 .93-.33 1.75a.75.75 0 1 1-1.4-.55q.23-.56.23-1.2m-6.5 0a3.25 3.25 0 0 0 3.43 3.24L8.75 9.81z" />
    </IconBase>
  ))
);

MicOffRegular.displayName = 'MicOffRegular';

// Triple export pattern (lucide-react style)
export { MicOffRegular, MicOffRegular as MicOffRegularIcon, MicOffRegular as SiMicOffRegular };
export default MicOffRegular;
export type { MicOffRegularProps };
