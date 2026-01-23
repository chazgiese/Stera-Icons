import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronsRightRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevrons-right" {...props}>
      <path fill="currentColor" d="M4.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" d="M12.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L18.94 12l-6.47-6.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChevronsRightRegular.displayName = 'ChevronsRightRegular';

// Triple export pattern (lucide-react style)
export { ChevronsRightRegular, ChevronsRightRegular as ChevronsRightRegularIcon, ChevronsRightRegular as SiChevronsRightRegular };
export default ChevronsRightRegular;
export type { ChevronsRightRegularProps };
