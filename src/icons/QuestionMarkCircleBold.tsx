import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleBoldProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleBold = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-bold" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6c1.94 0 3.75 1.4 3.75 3.4 0 1.54-1.1 2.74-2.45 3.2a1 1 0 0 0-.26.15q-.06.08-.04.05v.2a1 1 0 1 1-2 0v-.2c0-1.15.92-1.86 1.67-2.1.7-.24 1.08-.79 1.08-1.3 0-.65-.65-1.4-1.75-1.4-.97 0-1.65.6-1.78 1.15a1 1 0 1 1-1.94-.46C8.66 7.05 10.3 6 12 6" />
        <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleBold.displayName = 'QuestionMarkCircleBold';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleBold, QuestionMarkCircleBold as QuestionMarkCircleBoldIcon, QuestionMarkCircleBold as SiQuestionMarkCircleBold };
export default QuestionMarkCircleBold;
export type { QuestionMarkCircleBoldProps };
