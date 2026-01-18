import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronDownBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronDownBold = memo(
  forwardRef<SVGSVGElement, ChevronDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M18.3 8.3a1 1 0 1 1 1.4 1.4l-7 7a1 1 0 0 1-1.4 0l-7-7a1 1 0 1 1 1.4-1.4l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronDownBold.displayName = 'ChevronDownBold';

// Triple export pattern (lucide-react style)
export { ChevronDownBold, ChevronDownBold as ChevronDownBoldIcon, ChevronDownBold as SiChevronDownBold };
export type { ChevronDownBoldProps };
