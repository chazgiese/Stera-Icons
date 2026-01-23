import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleBoldProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleBold = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-bold" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6c1.99 0 4 1.33 4 3.4 0 1.63-1.28 2.82-2.74 3.23a1 1 0 0 0-.23.13l-.03.04v.2a1 1 0 1 1-2 0v-.2c0-1.15.92-1.87 1.72-2.1.88-.24 1.28-.83 1.28-1.3 0-.58-.68-1.4-2-1.4-1.15 0-1.9.65-2.03 1.17a1 1 0 0 1-1.94-.5C8.46 7 10.25 6 12 6" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleBold.displayName = 'QuestionMarkCircleBold';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleBold, QuestionMarkCircleBold as QuestionMarkCircleBoldIcon, QuestionMarkCircleBold as SiQuestionMarkCircleBold };
export default QuestionMarkCircleBold;
export type { QuestionMarkCircleBoldProps };
