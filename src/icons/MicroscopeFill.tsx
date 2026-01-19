import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type MicroscopeFillProps = Omit<IconBaseProps, 'children'>;

const MicroscopeFill = memo(
  forwardRef<SVGSVGElement, MicroscopeFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="microscope-fill" {...props}>
      <path fill="currentColor" d="M16 1a4 4 0 0 1 4 4v5.75c0 1.16-.88 2.11-2 2.24V13a2 2 0 1 1-4 0v-.01a2.25 2.25 0 0 1-2-2.24V8h-.5a6.5 6.5 0 1 0 0 13H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.03A8.5 8.5 0 0 1 11.5 6h.5V5a4 4 0 0 1 4-4" />
        <path fill="currentColor" d="M19 17a1 1 0 1 1 0 2h-6a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

MicroscopeFill.displayName = 'MicroscopeFill';

// Triple export pattern (lucide-react style)
export { MicroscopeFill, MicroscopeFill as MicroscopeFillIcon, MicroscopeFill as SiMicroscopeFill };
export default MicroscopeFill;
export type { MicroscopeFillProps };
