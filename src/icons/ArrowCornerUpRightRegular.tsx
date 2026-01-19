import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCornerUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-up-right" {...props}>
      <path fill="currentColor" d="M3 20.75a.75.75 0 0 1-.75-.75v-8A3.75 3.75 0 0 1 6 8.25h13.19l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5 .1.11.05.11.02.05.03.09v.04l.01.04.01.09q0 .32-.22.53l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6c-1.24 0-2.25 1-2.25 2.25v8c0 .41-.34.75-.75.75" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegular.displayName = 'ArrowCornerUpRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightRegular, ArrowCornerUpRightRegular as ArrowCornerUpRightRegularIcon, ArrowCornerUpRightRegular as SiArrowCornerUpRightRegular };
export type { ArrowCornerUpRightRegularProps };
