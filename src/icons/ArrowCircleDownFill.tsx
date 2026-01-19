import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M12 6a1 1 0 0 0-1 1v7.59l-3.3-3.3a1 1 0 1 0-1.4 1.42l5 5a1 1 0 0 0 1.4 0l5-5a1 1 0 1 0-1.4-1.42L13 14.6V7a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownFill.displayName = 'ArrowCircleDownFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownFill, ArrowCircleDownFill as ArrowCircleDownFillIcon, ArrowCircleDownFill as SiArrowCircleDownFill };
export type { ArrowCircleDownFillProps };
