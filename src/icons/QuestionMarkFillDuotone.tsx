import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuestionMarkFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkFillDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 1.5c3.87 0 7.5 2.67 7.5 6.5 0 3.33-2.74 5.78-6 6.37v.88a1.5 1.5 0 0 1-3 0V13c0-.83.67-1.5 1.5-1.5 2.75 0 4.5-1.81 4.5-3.5S14.75 4.5 12 4.5c-2.41 0-4.2 1.42-4.54 2.86a1.5 1.5 0 0 1-2.92-.72C5.31 3.51 8.61 1.5 12 1.5" />
        <path fill="currentColor" d="M12 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4" opacity={.4} />
    </IconBase>
  ))
);

QuestionMarkFillDuotone.displayName = 'QuestionMarkFillDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkFillDuotone, QuestionMarkFillDuotone as QuestionMarkFillDuotoneIcon, QuestionMarkFillDuotone as SiQuestionMarkFillDuotone };
export default QuestionMarkFillDuotone;
export type { QuestionMarkFillDuotoneProps };
