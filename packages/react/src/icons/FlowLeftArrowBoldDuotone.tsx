import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowLeftArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.1 11a5 5 0 0 0 0 2H4.41l-1-1 1-1z" opacity={.4} />
        <path fill="currentColor" d="M6.3 6.3a1 1 0 1 1 1.4 1.4L3.42 12l4.3 4.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1 0-1.4z" />
        <path fill="currentColor" fillRule="evenodd" d="M18 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowLeftArrowBoldDuotone.displayName = 'FlowLeftArrowBoldDuotone';

export { FlowLeftArrowBoldDuotone };
export type { FlowLeftArrowBoldDuotoneProps };
