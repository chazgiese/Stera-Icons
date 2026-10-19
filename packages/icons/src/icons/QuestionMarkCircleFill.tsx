import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFill = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 13.38c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m0-9c-1.65 0-3.24 1.02-3.6 2.6-.11.46.18.93.65 1.04s.94-.18 1.05-.65c.15-.62.88-1.24 1.9-1.24 1.15 0 1.88.79 1.88 1.52 0 .57-.42 1.16-1.17 1.41-.72.24-1.58.91-1.59 1.99v.2c0 .48.4.88.88.88s.88-.4.88-.88v-.2q-.02-.03.06-.13.1-.12.32-.2c1.32-.44 2.36-1.6 2.37-3.07 0-1.92-1.74-3.28-3.63-3.28" clipRule="evenodd" />
    </IconBase>
  ))
);

QuestionMarkCircleFill.displayName = 'QuestionMarkCircleFill';

// Triple export pattern
export { QuestionMarkCircleFill, QuestionMarkCircleFill as QuestionMarkCircleFillIcon, QuestionMarkCircleFill as SiQuestionMarkCircleFill };
export default QuestionMarkCircleFill;
export type { QuestionMarkCircleFillProps };
