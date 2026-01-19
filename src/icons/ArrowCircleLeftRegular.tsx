import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-left" {...props}>
      <path fill="currentColor" d="M17.75 12c0 .41-.34.75-.75.75H8.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72H17c.41 0 .75.34.75.75" />
        <path fill="currentColor" fillRule="evenodd" d="M22.75 12a10.75 10.75 0 1 1-21.5 0 10.75 10.75 0 0 1 21.5 0m-1.5 0a9.25 9.25 0 1 0-18.5 0 9.25 9.25 0 0 0 18.5 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleLeftRegular.displayName = 'ArrowCircleLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleLeftRegular, ArrowCircleLeftRegular as ArrowCircleLeftRegularIcon, ArrowCircleLeftRegular as SiArrowCircleLeftRegular };
export type { ArrowCircleLeftRegularProps };
