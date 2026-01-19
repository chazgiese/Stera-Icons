import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up" {...props}>
      <path fill="currentColor" d="M12 17.75a.75.75 0 0 1-.75-.75V8.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V17c0 .41-.34.75-.75.75" />
        <path fill="currentColor" fillRule="evenodd" d="M12 22.75a10.75 10.75 0 1 1 0-21.5 10.75 10.75 0 0 1 0 21.5m0-1.5a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRegular.displayName = 'ArrowCircleUpRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpRegular, ArrowCircleUpRegular as ArrowCircleUpRegularIcon, ArrowCircleUpRegular as SiArrowCircleUpRegular };
export type { ArrowCircleUpRegularProps };
