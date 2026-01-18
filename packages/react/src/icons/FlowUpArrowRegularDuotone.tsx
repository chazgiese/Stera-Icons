import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FlowUpArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12.75 3.81v9.5a5 5 0 0 0-1.5 0V3.8l.75-.75z" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M12 13.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" />
        <path fill="currentColor" d="M12 1.25q.31 0 .53.22l5 5a.75.75 0 1 1-1.06 1.06L12 3.06 7.53 7.53a.75.75 0 1 1-1.06-1.06l5-5 .11-.1a1 1 0 0 1 .42-.12" />
    </IconBase>
  ))
);

FlowUpArrowRegularDuotone.displayName = 'FlowUpArrowRegularDuotone';

export { FlowUpArrowRegularDuotone };
export type { FlowUpArrowRegularDuotoneProps };
