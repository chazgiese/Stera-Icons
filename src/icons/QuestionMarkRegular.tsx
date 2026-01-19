import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuestionMarkRegularProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkRegular = memo(
  forwardRef<SVGSVGElement, QuestionMarkRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark" {...props}>
      <path fill="currentColor" d="M12 18.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 2.25c3.6 0 6.75 2.45 6.75 5.75 0 3.07-2.73 5.4-6 5.71V16a.75.75 0 0 1-1.5 0v-3c0-.41.34-.75.75-.75 3.03 0 5.25-2.03 5.25-4.25S15.03 3.75 12 3.75c-2.66 0-4.82 1.57-5.27 3.43a.75.75 0 0 1-1.46-.36c.66-2.7 3.58-4.57 6.73-4.57" />
    </IconBase>
  ))
);

QuestionMarkRegular.displayName = 'QuestionMarkRegular';

// Triple export pattern (lucide-react style)
export { QuestionMarkRegular, QuestionMarkRegular as QuestionMarkRegularIcon, QuestionMarkRegular as SiQuestionMarkRegular };
export type { QuestionMarkRegularProps };
