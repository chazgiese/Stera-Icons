import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ArrowCircleUpLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.6 19.6A10.75 10.75 0 1 1 4.4 4.4a10.75 10.75 0 0 1 15.2 15.2m-3.36-3.36a1 1 0 0 0 0-1.41l-5.36-5.37h4.66a1 1 0 1 0 0-2H8.46a1 1 0 0 0-1 1v7.08a1 1 0 1 0 2 0v-4.66l5.37 5.36a1 1 0 0 0 1.41 0" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpLeftFill.displayName = 'ArrowCircleUpLeftFill';

export { ArrowCircleUpLeftFill };
export type { ArrowCircleUpLeftFillProps };
