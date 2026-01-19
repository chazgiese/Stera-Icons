import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronLeftBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftBold = memo(
  forwardRef<SVGSVGElement, ChevronLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-left-bold" {...props}>
      <path fill="currentColor" d="M14.3 4.3a1 1 0 1 1 1.4 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronLeftBold.displayName = 'ChevronLeftBold';

// Triple export pattern (lucide-react style)
export { ChevronLeftBold, ChevronLeftBold as ChevronLeftBoldIcon, ChevronLeftBold as SiChevronLeftBold };
export type { ChevronLeftBoldProps };
