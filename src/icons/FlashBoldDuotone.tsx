import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash-bold-duotone" {...props}>
      <path fill="currentColor" d="M15.72 1.25a1 1 0 1 1 1.32 1.5L6.95 11.62l3.63 1.25a1 1 0 0 1 .62 1.25l-2.62 8.19a1 1 0 0 1-1.9-.62L9 14.44l-4.33-1.5a1 1 0 0 1-.33-1.7z" />
        <path fill="currentColor" d="M17.33 2.3 15 9.57l4.33 1.5a1 1 0 0 1 .33 1.7l-11.37 10h-.02a1 1 0 0 0 .3-.45l1.11-3.45 7.37-6.48-3.63-1.25a1 1 0 0 1-.62-1.25l1.52-4.74 2.72-2.39a1 1 0 0 0 .3-.46z" opacity={.4} />
    </IconBase>
  ))
);

FlashBoldDuotone.displayName = 'FlashBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlashBoldDuotone, FlashBoldDuotone as FlashBoldDuotoneIcon, FlashBoldDuotone as SiFlashBoldDuotone };
export default FlashBoldDuotone;
export type { FlashBoldDuotoneProps };
