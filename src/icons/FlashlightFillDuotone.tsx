import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashlightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashlightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashlightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flashlight-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M18 6.34a5 5 0 0 1-1.46 3.54l-.16.16a3 3 0 0 0-.88 2.12V20a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3v-7.84a3 3 0 0 0-.88-2.12l-.16-.16A5 5 0 0 1 6 6.34v-.59h12zM12 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1" clipRule="evenodd" opacity={0.4} />
        <path d="M15 1a3 3 0 0 1 3 3v.25H6V4a3 3 0 0 1 3-3z" opacity={0.4} />
        <path fill="currentColor" d="M12 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1M18 5.75H6v-1.5h12z" />
    </IconBase>
  ))
);

FlashlightFillDuotone.displayName = 'FlashlightFillDuotone';

// Triple export pattern (lucide-react style)
export { FlashlightFillDuotone, FlashlightFillDuotone as FlashlightFillDuotoneIcon, FlashlightFillDuotone as SiFlashlightFillDuotone };
export type { FlashlightFillDuotoneProps };
