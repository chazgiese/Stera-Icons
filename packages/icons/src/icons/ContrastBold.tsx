import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ContrastBoldProps = Omit<IconBaseProps, 'children'>;

const ContrastBold = memo(
  forwardRef<SVGSVGElement, ContrastBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.5c5.8 0 10.5 4.7 10.5 10.5S17.8 22.5 12 22.5 1.5 17.8 1.5 12 6.2 1.5 12 1.5m0 2c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

ContrastBold.displayName = 'ContrastBold';

// Triple export pattern
export { ContrastBold, ContrastBold as ContrastBoldIcon, ContrastBold as SiContrastBold };
export default ContrastBold;
export type { ContrastBoldProps };
