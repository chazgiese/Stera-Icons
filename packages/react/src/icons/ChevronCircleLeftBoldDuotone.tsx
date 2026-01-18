import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronCircleLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.8 6.8a1 1 0 1 1 1.4 1.4L10.42 12l3.8 3.8a1 1 0 1 1-1.42 1.4l-4.5-4.5a1 1 0 0 1 0-1.4z" />
    </IconBase>
  ))
);

ChevronCircleLeftBoldDuotone.displayName = 'ChevronCircleLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftBoldDuotone, ChevronCircleLeftBoldDuotone as ChevronCircleLeftBoldDuotoneIcon, ChevronCircleLeftBoldDuotone as SiChevronCircleLeftBoldDuotone };
export type { ChevronCircleLeftBoldDuotoneProps };
