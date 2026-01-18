import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlashFillProps = Omit<IconBaseProps, 'children'>;

const FlashFill = memo(
  forwardRef<SVGSVGElement, FlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.71 1.25a1 1 0 0 1 1.62 1.06L15 9.56l4.33 1.5a1 1 0 0 1 .33 1.7l-11.37 10a1 1 0 0 1-1.62-1.07L9 14.44l-4.33-1.5a1 1 0 0 1-.33-1.7z" />
    </IconBase>
  ))
);

FlashFill.displayName = 'FlashFill';

// Triple export pattern (lucide-react style)
export { FlashFill, FlashFill as FlashFillIcon, FlashFill as SiFlashFill };
export type { FlashFillProps };
