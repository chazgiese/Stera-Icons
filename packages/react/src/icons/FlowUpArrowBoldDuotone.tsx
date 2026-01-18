import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowUpArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13 4.41v8.69a5 5 0 0 0-2 0V4.41l1-1z" opacity={.4} />
        <path fill="currentColor" d="M6.3 7.7a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1-1.4 1.4L12 3.42l-4.3 4.3a1 1 0 0 1-1.4 0" />
        <path fill="currentColor" fillRule="evenodd" d="M7 18a5 5 0 1 1 10 0 5 5 0 0 1-10 0m2 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowUpArrowBoldDuotone.displayName = 'FlowUpArrowBoldDuotone';

export { FlowUpArrowBoldDuotone };
export type { FlowUpArrowBoldDuotoneProps };
