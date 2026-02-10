import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MicroscopeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const MicroscopeBoldDuotone = memo(
  forwardRef<SVGSVGElement, MicroscopeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-bold-duotone" {...props}>
      <path d="M12 5.5v2h-1a6 6 0 0 0 0 12H5.71A8 8 0 0 1 11 5.5zM19 16.5a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M20 19.5a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
        <path fill="currentColor" fillRule="evenodd" d="M16 1.5a4 4 0 0 1 4 4v4.75c0 1.16-.88 2.11-2 2.24v.01a2 2 0 1 1-4 0v-.01a2.25 2.25 0 0 1-2-2.24V5.5a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v4.75q.02.23.25.25h3.5q.23-.02.25-.25V5.5a2 2 0 0 0-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

MicroscopeBoldDuotone.displayName = 'MicroscopeBoldDuotone';

// Triple export pattern (lucide-react style)
export { MicroscopeBoldDuotone, MicroscopeBoldDuotone as MicroscopeBoldDuotoneIcon, MicroscopeBoldDuotone as SiMicroscopeBoldDuotone };
export default MicroscopeBoldDuotone;
export type { MicroscopeBoldDuotoneProps };
