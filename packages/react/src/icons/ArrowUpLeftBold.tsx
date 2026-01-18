import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowUpLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowUpLeftBold = memo(
  forwardRef<SVGSVGElement, ArrowUpLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 5a1 1 0 1 1 0 2H8.41l10.3 10.3a1 1 0 1 1-1.42 1.4L7 8.42V16a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1z" />
    </IconBase>
  ))
);

ArrowUpLeftBold.displayName = 'ArrowUpLeftBold';

// Triple export pattern (lucide-react style)
export { ArrowUpLeftBold, ArrowUpLeftBold as ArrowUpLeftBoldIcon, ArrowUpLeftBold as SiArrowUpLeftBold };
export type { ArrowUpLeftBoldProps };
