import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 6.25c.41 0 .75.34.75.75v8.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V7c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCircleDownRegularDuotone.displayName = 'ArrowCircleDownRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRegularDuotone, ArrowCircleDownRegularDuotone as ArrowCircleDownRegularDuotoneIcon, ArrowCircleDownRegularDuotone as SiArrowCircleDownRegularDuotone };
export type { ArrowCircleDownRegularDuotoneProps };
