import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuestionMarkCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c1.9 0 3.75 1.26 3.75 3.15 0 1.49-1.17 2.6-2.56 2.99a1 1 0 0 0-.34.2q-.11.12-.1.21v.2a.75.75 0 0 1-1.5 0v-.2c0-1 .8-1.65 1.54-1.86.95-.26 1.46-.93 1.46-1.54 0-.76-.84-1.65-2.25-1.65-1.23 0-2.1.7-2.27 1.35a.75.75 0 0 1-1.46-.36c.4-1.54 2.06-2.49 3.73-2.49" />
    </IconBase>
  ))
);

QuestionMarkCircleRegularDuotone.displayName = 'QuestionMarkCircleRegularDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleRegularDuotone, QuestionMarkCircleRegularDuotone as QuestionMarkCircleRegularDuotoneIcon, QuestionMarkCircleRegularDuotone as SiQuestionMarkCircleRegularDuotone };
export type { QuestionMarkCircleRegularDuotoneProps };
