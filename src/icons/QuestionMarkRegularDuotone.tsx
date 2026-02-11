import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkRegularDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-duotone" {...props}>
      <path d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" opacity={.4} />
        <path d="M12 2.25c3.6 0 6.75 2.45 6.75 5.75 0 3.07-2.73 5.4-6 5.71V16a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75 3.03 0 5.25-2.03 5.25-4.25S15.03 3.75 12 3.75c-2.66 0-4.82 1.57-5.27 3.43a.75.75 0 0 1-1.46-.36c.66-2.7 3.58-4.57 6.73-4.57" />
    </IconBase>
  ))
);

QuestionMarkRegularDuotone.displayName = 'QuestionMarkRegularDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkRegularDuotone, QuestionMarkRegularDuotone as QuestionMarkRegularDuotoneIcon, QuestionMarkRegularDuotone as SiQuestionMarkRegularDuotone };
export default QuestionMarkRegularDuotone;
export type { QuestionMarkRegularDuotoneProps };
