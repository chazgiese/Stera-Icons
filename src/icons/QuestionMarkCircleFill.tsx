import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9c-1.69 0-3.34 1.05-3.72 2.7a1 1 0 1 0 1.94.45C10.35 8.6 11.02 8 12 8c1.1 0 1.75.75 1.75 1.4 0 .51-.37 1.06-1.08 1.3-.75.24-1.67.95-1.67 2.1v.2a1 1 0 1 0 2 0v-.2l.04-.05a1 1 0 0 1 .26-.16 3.4 3.4 0 0 0 2.45-3.19c0-2-1.81-3.4-3.75-3.4" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleFill.displayName = 'QuestionMarkCircleFill';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFill, QuestionMarkCircleFill as QuestionMarkCircleFillIcon, QuestionMarkCircleFill as SiQuestionMarkCircleFill };
export default QuestionMarkCircleFill;
export type { QuestionMarkCircleFillProps };
