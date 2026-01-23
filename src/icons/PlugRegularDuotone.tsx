import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlugRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlugRegularDuotone = memo(
  forwardRef<SVGSVGElement, PlugRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="plug-duotone" {...props}>
      <path fillRule="evenodd" d="M5.1 10.77a2 2 0 0 1 2.78.05l5.3 5.3a2 2 0 0 1 .05 2.77l-.15.16-.01.02a5.75 5.75 0 0 1-8.14-8.14l.02-.01zm1.72 1.11a.5.5 0 0 0-.7 0l-.14.13A4.25 4.25 0 0 0 12 18l.14-.14a.5.5 0 0 0-.01-.7z" clipRule="evenodd" opacity={0.4} />
        <path d="M21.47 1.47a.75.75 0 0 1 1.06 1.06L19.56 5.5a6 6 0 0 0-1.06-1.06z" opacity={0.4} />
        <path fill="currentColor" d="M4.44 18.5a6 6 0 0 0 1.06 1.06l-2.97 2.97a.75.75 0 1 1-1.06-1.06z" />
        <path fill="currentColor" fillRule="evenodd" d="M10.93 4.93a5.75 5.75 0 0 1 8.14 8.14l-.02.01-.16.15a2 2 0 0 1-2.77-.05l-.62-.62-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-1.94-1.94-1.47 1.47a.75.75 0 1 1-1.06-1.06l1.47-1.47-.62-.62a2 2 0 0 1-.05-2.77l.15-.16zM18 6a4.25 4.25 0 0 0-6-.01l-.13.14a.5.5 0 0 0 .01.7l4.14 4.13.01.01 1.15 1.15c.19.19.5.2.7.01l.13-.14a4.25 4.25 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

PlugRegularDuotone.displayName = 'PlugRegularDuotone';

// Triple export pattern (lucide-react style)
export { PlugRegularDuotone, PlugRegularDuotone as PlugRegularDuotoneIcon, PlugRegularDuotone as SiPlugRegularDuotone };
export default PlugRegularDuotone;
export type { PlugRegularDuotoneProps };
