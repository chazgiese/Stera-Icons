import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 15.25c.7 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M12 6.25c1.83 0 3.5 1.32 3.5 3.15 0 1.4-1 2.53-2.28 2.95q-.24.1-.37.23-.11.14-.1.22v.2c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-.2c0-1 .8-1.64 1.5-1.87.79-.26 1.25-.9 1.25-1.53 0-.82-.8-1.65-2-1.65-1.06 0-1.86.66-2.02 1.34-.1.4-.5.65-.9.56-.4-.1-.65-.5-.56-.9.35-1.5 1.88-2.5 3.48-2.5" />
    </IconBase>
  ))
);

QuestionMarkCircleRegularDuotone.displayName = 'QuestionMarkCircleRegularDuotone';

// Triple export pattern
export { QuestionMarkCircleRegularDuotone, QuestionMarkCircleRegularDuotone as QuestionMarkCircleRegularDuotoneIcon, QuestionMarkCircleRegularDuotone as SiQuestionMarkCircleRegularDuotone };
export default QuestionMarkCircleRegularDuotone;
export type { QuestionMarkCircleRegularDuotoneProps };
