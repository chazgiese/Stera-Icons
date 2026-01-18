import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type IdHBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdHBoldDuotone = memo(
  forwardRef<SVGSVGElement, IdHBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM5 5a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M8.83 8a3 3 0 0 1 2.4 4.8 4 4 0 0 1 1.37 1.87 1 1 0 0 1-1.88.66 2 2 0 0 0-3.78 0 1 1 0 1 1-1.88-.66c.26-.75.75-1.4 1.37-1.87q-.58-.76-.6-1.8a3 3 0 0 1 3-3m0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2" clipRule="evenodd" />
        <path fill="currentColor" d="M18 13a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2zM18 9a1 1 0 0 1 0 2h-3a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

IdHBoldDuotone.displayName = 'IdHBoldDuotone';

// Triple export pattern (lucide-react style)
export { IdHBoldDuotone, IdHBoldDuotone as IdHBoldDuotoneIcon, IdHBoldDuotone as SiIdHBoldDuotone };
export type { IdHBoldDuotoneProps };
