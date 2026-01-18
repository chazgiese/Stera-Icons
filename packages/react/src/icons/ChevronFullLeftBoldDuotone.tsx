import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronFullLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15.9 4.57A1 1 0 0 1 16 5v14a1 1 0 0 0-.3-.7L14 16.58V7.4l1.7-1.7a1 1 0 0 0 .2-1.14" opacity={.4} />
        <path fill="currentColor" d="M14.3 4.3a1 1 0 1 1 1.4 1.4L9.42 12l6.3 6.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronFullLeftBoldDuotone.displayName = 'ChevronFullLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullLeftBoldDuotone, ChevronFullLeftBoldDuotone as ChevronFullLeftBoldDuotoneIcon, ChevronFullLeftBoldDuotone as SiChevronFullLeftBoldDuotone };
export type { ChevronFullLeftBoldDuotoneProps };
