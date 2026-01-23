import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastFillProps = Omit<IconBaseProps, 'children'>;

const ContrastFill = memo(
  forwardRef<SVGSVGElement, ContrastFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 20a9 9 0 1 0 0-18z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastFill.displayName = 'ContrastFill';

// Triple export pattern (lucide-react style)
export { ContrastFill, ContrastFill as ContrastFillIcon, ContrastFill as SiContrastFill };
export default ContrastFill;
export type { ContrastFillProps };
