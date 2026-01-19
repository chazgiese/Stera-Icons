import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-up-left" {...props}>
      <path fill="currentColor" d="M16.07 16.07c-.3.29-.77.29-1.06 0l-5.8-5.8v5.27a.75.75 0 1 1-1.5 0V8.46a.75.75 0 0 1 .75-.75h7.08a.75.75 0 0 1 0 1.5h-5.26l5.79 5.8c.29.29.29.76 0 1.06" />
        <path fill="currentColor" fillRule="evenodd" d="M19.6 19.6A10.75 10.75 0 1 1 4.4 4.4a10.75 10.75 0 0 1 15.2 15.2m-1.06-1.06A9.25 9.25 0 1 0 5.46 5.46a9.25 9.25 0 0 0 13.08 13.08" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftRegular.displayName = 'ArrowCircleUpLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCircleUpLeftRegular, ArrowCircleUpLeftRegular as ArrowCircleUpLeftRegularIcon, ArrowCircleUpLeftRegular as SiArrowCircleUpLeftRegular };
export type { ArrowCircleUpLeftRegularProps };
