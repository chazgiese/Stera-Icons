import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type QuestionMarkCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const QuestionMarkCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, QuestionMarkCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 13.38c-.76 0-1.38.61-1.38 1.37s.62 1.37 1.38 1.38 1.37-.62 1.37-1.38-.61-1.37-1.37-1.37m0-9c-1.65 0-3.24 1.02-3.6 2.6-.11.46.18.93.65 1.04s.94-.18 1.05-.65c.14-.62.88-1.24 1.9-1.24 1.15 0 1.87.79 1.87 1.52 0 .57-.42 1.16-1.16 1.41-.72.24-1.59.91-1.59 1.99v.2c0 .48.4.87.88.88.48 0 .87-.4.87-.88v-.2q-.01-.03.07-.13.1-.12.32-.2c1.32-.44 2.36-1.6 2.36-3.07 0-1.92-1.73-3.28-3.62-3.28" clipRule="evenodd" opacity={.4} />
        <path d="M12 15.13c.76 0 1.37.61 1.37 1.37s-.61 1.38-1.37 1.38-1.38-.62-1.38-1.38.62-1.37 1.38-1.37M12 6.13c1.89 0 3.62 1.35 3.62 3.27 0 1.47-1.04 2.63-2.36 3.07q-.21.08-.32.2-.08.1-.07.13v.2c0 .48-.39.88-.87.88s-.88-.4-.88-.88v-.2c0-1.08.87-1.75 1.59-1.99.75-.25 1.16-.84 1.16-1.41 0-.73-.72-1.53-1.87-1.53-1.02 0-1.75.63-1.9 1.25-.1.47-.58.76-1.05.65S8.3 9.2 8.4 8.72c.36-1.57 1.95-2.6 3.6-2.6" />
    </IconBase>
  ))
);

QuestionMarkCircleFillDuotone.displayName = 'QuestionMarkCircleFillDuotone';

// Triple export pattern
export { QuestionMarkCircleFillDuotone, QuestionMarkCircleFillDuotone as QuestionMarkCircleFillDuotoneIcon, QuestionMarkCircleFillDuotone as SiQuestionMarkCircleFillDuotone };
export default QuestionMarkCircleFillDuotone;
export type { QuestionMarkCircleFillDuotoneProps };
