import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashlightBoldProps = Omit<IconBaseProps, 'children'>;

const FlashlightBold = memo(
  forwardRef<SVGSVGElement, FlashlightBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-bold" {...props}>
      <path fill="currentColor" d="M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M15 1a3 3 0 0 1 3 3v2.34a5 5 0 0 1-1.46 3.54l-.16.16a3 3 0 0 0-.88 2.12V20a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-7.84a3 3 0 0 0-.88-2.12l-.16-.16A5 5 0 0 1 6 6.34V4a3 3 0 0 1 3-3zM8 6.34a3 3 0 0 0 .88 2.12l.16.16a5 5 0 0 1 1.46 3.54V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.84a5 5 0 0 1 1.46-3.54l.16-.16A3 3 0 0 0 16 6.34v-.59H8zM9 3a1 1 0 0 0-1 1v.25h8V4a1 1 0 0 0-1-1z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashlightBold.displayName = 'FlashlightBold';

// Triple export pattern (lucide-react style)
export { FlashlightBold, FlashlightBold as FlashlightBoldIcon, FlashlightBold as SiFlashlightBold };
export default FlashlightBold;
export type { FlashlightBoldProps };
