import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FrameFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FrameFillDuotone = memo(
  forwardRef<SVGSVGElement, FrameFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="frame-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16 6.5c0 .83.67 1.5 1.5 1.5H19v8h-1.5c-.83 0-1.5.67-1.5 1.5V19H8v-1.5A1.5 1.5 0 0 0 6.65 16H5V8h1.5A1.5 1.5 0 0 0 8 6.65V5h8zM8 16h8V8H8z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M6.65 16A1.5 1.5 0 0 1 8 17.5V21a1.5 1.5 0 0 1-3 0v-2H3a1.5 1.5 0 0 1 0-3h3.65M21 16a1.5 1.5 0 0 1 0 3h-2v2a1.5 1.5 0 0 1-3 0v-3.5c0-.83.67-1.5 1.5-1.5zM6.5 1.5C7.33 1.5 8 2.17 8 3v3.65A1.5 1.5 0 0 1 6.5 8H3a1.5 1.5 0 1 1 0-3h2V3c0-.83.67-1.5 1.5-1.5M17.5 1.5c.83 0 1.5.67 1.5 1.5v2h2a1.5 1.5 0 0 1 0 3h-3.5A1.5 1.5 0 0 1 16 6.5V3c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

FrameFillDuotone.displayName = 'FrameFillDuotone';

// Triple export pattern (lucide-react style)
export { FrameFillDuotone, FrameFillDuotone as FrameFillDuotoneIcon, FrameFillDuotone as SiFrameFillDuotone };
export default FrameFillDuotone;
export type { FrameFillDuotoneProps };
