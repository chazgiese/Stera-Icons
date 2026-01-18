import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ChevronsRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronsRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronsRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M4.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 0-1.06" />
        <path fill="currentColor" d="M12.47 4.47c.3-.3.77-.3 1.06 0l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 1 1-1.06-1.06L18.94 12l-6.47-6.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ChevronsRightRegular.displayName = 'ChevronsRightRegular';

export { ChevronsRightRegular };
export type { ChevronsRightRegularProps };
