import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastBold = memo(
  forwardRef<SVGSVGElement, ContrastBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="contrast-bold" {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBold.displayName = 'ContrastBold';

// Triple export pattern (lucide-react style)
export { ContrastBold, ContrastBold as ContrastBoldIcon, ContrastBold as SiContrastBold };
export default ContrastBold;
export type { ContrastBoldProps };
