import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type QuestionMarkCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="question-mark-circle-fill-duotone" {...props}>
      <path fill="currentColor" d="M12 15a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 6c1.99 0 4 1.33 4 3.4 0 1.63-1.28 2.82-2.74 3.23a1 1 0 0 0-.23.13l-.03.04v.2a1 1 0 0 1-2 0v-.2c0-1.15.92-1.87 1.72-2.1.88-.24 1.28-.83 1.28-1.3 0-.58-.68-1.4-2-1.4-1.15 0-1.9.65-2.03 1.17a1 1 0 0 1-1.94-.5C8.46 7 10.25 6 12 6" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 14a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m0-9c-1.75 0-3.54 1-3.97 2.67a1 1 0 0 0 1.94.5C10.1 8.65 10.85 8 12 8c1.32 0 2 .82 2 1.4 0 .47-.4 1.06-1.28 1.3-.8.23-1.72.95-1.72 2.1v.2a1 1 0 0 0 2 0v-.2l.03-.04a1 1 0 0 1 .23-.13c1.46-.4 2.74-1.6 2.74-3.23C16 7.33 13.99 6 12 6" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

QuestionMarkCircleFillDuotone.displayName = 'QuestionMarkCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { QuestionMarkCircleFillDuotone, QuestionMarkCircleFillDuotone as QuestionMarkCircleFillDuotoneIcon, QuestionMarkCircleFillDuotone as SiQuestionMarkCircleFillDuotone };
export default QuestionMarkCircleFillDuotone;
export type { QuestionMarkCircleFillDuotoneProps };
