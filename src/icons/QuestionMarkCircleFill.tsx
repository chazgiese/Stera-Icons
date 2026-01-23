import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9c-1.75 0-3.54 1-3.97 2.67a1 1 0 0 0 1.94.5C10.1 8.65 10.85 8 12 8c1.32 0 2 .82 2 1.4 0 .47-.4 1.06-1.28 1.3-.8.23-1.72.95-1.72 2.1v.2a1 1 0 1 0 2 0v-.2q0 0 .03-.04a1 1 0 0 1 .23-.13c1.46-.4 2.74-1.6 2.74-3.23C16 7.33 13.99 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleFill.displayName = 'QuestionMarkCircleFill';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFill, QuestionMarkCircleFill as QuestionMarkCircleFillIcon, QuestionMarkCircleFill as SiQuestionMarkCircleFill };
export default QuestionMarkCircleFill;
export type { QuestionMarkCircleFillProps };
