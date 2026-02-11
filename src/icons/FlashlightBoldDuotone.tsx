import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashlightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-bold-duotone" {...props}>
      <path fillRule="evenodd" d="M15 1a3 3 0 0 1 3 3v2.34a5 5 0 0 1-1.46 3.54l-.16.16a3 3 0 0 0-.88 2.12V20a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-7.84a3 3 0 0 0-.88-2.12l-.16-.16A5 5 0 0 1 6 6.34V4a3 3 0 0 1 3-3zM9 3a1 1 0 0 0-1 1v2.34a3 3 0 0 0 .88 2.12l.16.16a5 5 0 0 1 1.46 3.54V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.84a5 5 0 0 1 1.46-3.54l.16-.16A3 3 0 0 0 16 6.34V4a1 1 0 0 0-1-1z" clipRule="evenodd" opacity={.4} />
        <path d="M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M16 5.75H8v-1.5h8z" />
    </IconBase>
  ))
);

FlashlightBoldDuotone.displayName = 'FlashlightBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlashlightBoldDuotone, FlashlightBoldDuotone as FlashlightBoldDuotoneIcon, FlashlightBoldDuotone as SiFlashlightBoldDuotone };
export default FlashlightBoldDuotone;
export type { FlashlightBoldDuotoneProps };
