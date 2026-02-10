import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-fill-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9c-1.69 0-3.34 1.05-3.72 2.7a1 1 0 1 0 1.94.45C10.35 8.6 11.02 8 12 8c1.1 0 1.75.75 1.75 1.4 0 .51-.37 1.06-1.08 1.3-.75.24-1.67.95-1.67 2.1v.2a1 1 0 0 0 2 0v-.2l.04-.05a1 1 0 0 1 .26-.16 3.4 3.4 0 0 0 2.45-3.19c0-2-1.81-3.4-3.75-3.4" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6c1.94 0 3.75 1.4 3.75 3.4 0 1.54-1.1 2.74-2.45 3.2a1 1 0 0 0-.26.15q-.06.08-.04.05v.2a1 1 0 0 1-2 0v-.2c0-1.15.92-1.86 1.67-2.1.7-.24 1.08-.79 1.08-1.3 0-.65-.65-1.4-1.75-1.4-.97 0-1.65.6-1.78 1.15a1 1 0 1 1-1.94-.46C8.66 7.05 10.3 6 12 6" />
    </IconBase>
  ))
);

QuestionMarkCircleFillDuotone.displayName = 'QuestionMarkCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFillDuotone, QuestionMarkCircleFillDuotone as QuestionMarkCircleFillDuotoneIcon, QuestionMarkCircleFillDuotone as SiQuestionMarkCircleFillDuotone };
export default QuestionMarkCircleFillDuotone;
export type { QuestionMarkCircleFillDuotoneProps };
