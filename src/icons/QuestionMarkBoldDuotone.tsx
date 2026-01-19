import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuestionMarkBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkBoldDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-bold-duotone" {...props}>
      <path fill="currentColor" d="M12 2c3.69 0 7 2.52 7 6 0 3.16-2.73 5.53-6 5.94v1.56a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1c2.94 0 5-1.95 5-4s-2.06-4-5-4C9.42 4 7.39 5.52 6.97 7.24a1 1 0 0 1-1.94-.48C5.73 3.91 8.77 2 12 2" />
        <path fill="currentColor" d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={.4} />
    </IconBase>
  ))
);

QuestionMarkBoldDuotone.displayName = 'QuestionMarkBoldDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkBoldDuotone, QuestionMarkBoldDuotone as QuestionMarkBoldDuotoneIcon, QuestionMarkBoldDuotone as SiQuestionMarkBoldDuotone };
export default QuestionMarkBoldDuotone;
export type { QuestionMarkBoldDuotoneProps };
