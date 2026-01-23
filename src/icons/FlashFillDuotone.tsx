import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlashFillDuotone = memo(
  forwardRef<SVGSVGElement, FlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flash-fill-duotone" {...props}>
      <path fill="currentColor" d="M12.8 9.88a1 1 0 0 0 .62 1.25l3.63 1.25-7.37 6.48 1.52-4.74a1 1 0 0 0-.62-1.25l-3.63-1.25 7.37-6.48z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.71 1.25a1 1 0 0 1 1.62 1.06L15 9.56l4.33 1.5a1 1 0 0 1 .33 1.7l-11.37 10a1 1 0 0 1-1.62-1.07L9 14.44l-4.33-1.5a1 1 0 0 1-.33-1.7zM6.95 11.62l3.63 1.25a1 1 0 0 1 .62 1.25l-1.52 4.74 7.37-6.48-3.63-1.25a1 1 0 0 1-.62-1.25l1.52-4.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlashFillDuotone.displayName = 'FlashFillDuotone';

// Triple export pattern (lucide-react style)
export { FlashFillDuotone, FlashFillDuotone as FlashFillDuotoneIcon, FlashFillDuotone as SiFlashFillDuotone };
export default FlashFillDuotone;
export type { FlashFillDuotoneProps };
