import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleRegularProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleRegular = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle" {...props}>
      <path fill="currentColor" d="M12 15.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 6.25c1.83 0 3.5 1.32 3.5 3.15 0 1.4-1 2.53-2.28 2.95a1 1 0 0 0-.37.23q-.11.14-.1.22v.2a.75.75 0 0 1-1.5 0v-.2c0-1 .8-1.64 1.5-1.87.79-.26 1.25-.9 1.25-1.53 0-.82-.8-1.65-2-1.65-1.06 0-1.86.66-2.02 1.34a.75.75 0 1 1-1.46-.34c.35-1.5 1.88-2.5 3.48-2.5" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2.25a9.75 9.75 0 1 1 0 19.5 9.75 9.75 0 0 1 0-19.5m0 1.5a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleRegular.displayName = 'QuestionMarkCircleRegular';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleRegular, QuestionMarkCircleRegular as QuestionMarkCircleRegularIcon, QuestionMarkCircleRegular as SiQuestionMarkCircleRegular };
export default QuestionMarkCircleRegular;
export type { QuestionMarkCircleRegularProps };
