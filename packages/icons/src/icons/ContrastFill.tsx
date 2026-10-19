import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillProps = Omit<IconBaseProps, 'children'>;

const ContrastFill = memo(
  forwardRef<SVGSVGElement, ContrastFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 19c4.83 0 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastFill.displayName = 'ContrastFill';

// Triple export pattern
export { ContrastFill, ContrastFill as ContrastFillIcon, ContrastFill as SiContrastFill };
export default ContrastFill;
export type { ContrastFillProps };
